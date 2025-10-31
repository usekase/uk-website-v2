import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberneticGridShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1) Renderer, Scene, Camera, Clock
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // 2) GLSL Shaders
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;
      uniform float iMouseVelocity;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233)))
                     * 43758.5453123);
      }

      void main() {
        // normalize coords around center
        vec2 uv    = (gl_FragCoord.xy - 0.5 * iResolution.xy)
                     / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy)
                     / iResolution.y;

        float t         = iTime * 0.2;
        float mouseDist = length(uv - mouse);

        // grid lines (no warp)
        vec2 gridUv = abs(fract(uv * 10.0) - 0.5);
        float line  = pow(1.0 - min(gridUv.x, gridUv.y), 50.0);

        // base grid color pulsing
        vec3 gridColor = vec3(0.1, 0.5, 1.0);
        vec3 color     = gridColor
                       * line
                       * (0.5 + sin(t * 2.0) * 0.2);

        // energetic pulses along grid
        float energy = sin(uv.x * 20.0 + t * 5.0)
                     * sin(uv.y * 20.0 + t * 3.0);
        energy = smoothstep(0.8, 1.0, energy);
        color += vec3(1.0, 0.2, 0.8) * energy * line;

        // mouse tracking pulses - small localized ring
        float pulseSpeed = 3.0;
        float pulseWidth = 0.015;
        float pulseIntensity = iMouseVelocity * 0.3;
        float maxPulseRadius = 0.3; // limit to ~3 grid squares

        vec2 toMouse = uv - mouse;
        float distFromMouse = length(toMouse);

        // Create single small pulse ring
        float pulseTime = mod(t * pulseSpeed, 1.0);
        float pulseRadius = pulseTime * maxPulseRadius;

        // Create sharp pulse ring
        float pulse = smoothstep(pulseWidth, 0.0, abs(distFromMouse - pulseRadius));

        // Only show pulse within max radius
        pulse *= smoothstep(maxPulseRadius, maxPulseRadius - 0.05, pulseRadius);
        pulse *= pulseIntensity;

        // Add pulse to color along grid lines
        color += vec3(1.0, 0.4, 0.9) * pulse * line * 1.5;

        // glow around mouse
        float glow = smoothstep(0.1, 0.0, mouseDist);
        color += vec3(1.0) * glow * 0.5;

        // subtle noise
        color += random(uv + t * 0.1) * 0.05;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // 3) Uniforms, Material, Mesh
    const uniforms = {
      iTime:          { value: 0 },
      iResolution:    { value: new THREE.Vector2() },
      iMouse:         { value: new THREE.Vector2(
                          window.innerWidth / 2,
                          window.innerHeight / 2
                        ) },
      iMouseVelocity: { value: 0 }
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh     = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 4) Resize handler
    const onResize = () => {
      const width  = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      // Make sure canvas fills container
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener('resize', onResize);
    onResize(); // set initial size

    // 5) Mouse handler with velocity tracking
    let prevMouseX = window.innerWidth / 2;
    let prevMouseY = window.innerHeight / 2;
    let mouseVelocity = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate velocity (distance moved)
      const dx = x - prevMouseX;
      const dy = y - prevMouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Update velocity with smoothing
      mouseVelocity = Math.min(mouseVelocity * 0.8 + distance * 0.2, 50);

      // Store current position for next frame
      prevMouseX = x;
      prevMouseY = y;

      // Scale by pixel ratio to match canvas resolution
      const pixelRatio = window.devicePixelRatio;
      uniforms.iMouse.value.set(
        x * pixelRatio,
        (rect.height - y) * pixelRatio
      );
    };
    window.addEventListener('mousemove', onMouseMove);

    // 6) Animation loop
    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();

      // Apply velocity decay
      mouseVelocity *= 0.95;
      uniforms.iMouseVelocity.value = mouseVelocity;

      renderer.render(scene, camera);
    });

    // 7) Cleanup on unmount
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);

      renderer.setAnimationLoop(null);

      const canvas = renderer.domElement;
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      aria-label="Cybernetic Grid animated background"
    />
  );
};

export default CyberneticGridShader;
