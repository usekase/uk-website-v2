import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import UsekaseNavbar from "@/components/layout/UsekaseNavbar";
import UsekaseFooter from "@/components/layout/UsekaseFooter";
import { Linkedin as LinkedinIcon, Facebook, Instagram, AlertCircle, CheckCircle2, User, Building2, Briefcase, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  company: string;
  role: string;
  objective: string;
  timeline: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  role?: string;
  objective?: string;
  timeline?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    role: "",
    objective: "",
    timeline: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.objective.trim()) {
      newErrors.objective = "Please describe what you're trying to achieve";
    } else if (formData.objective.trim().length < 10) {
      newErrors.objective = "Please provide more details (at least 10 characters)";
    }

    if (!formData.timeline.trim()) {
      newErrors.timeline = "Timeline is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Thank you for contacting us! We'll be in touch soon.",
        });

        // Reset form
        setFormData({
          name: "",
          company: "",
          role: "",
          objective: "",
          timeline: ""
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send your message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <UsekaseNavbar />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Card variant="corners" className="p-8 md:p-12 lg:p-16 bg-white dark:bg-zinc-900">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Contact Information */}
              <div className="space-y-12">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                    Let's talk about{" "}
                    <span className="text-primary">your AI future.</span>
                  </h1>
                </div>

              {/* Singapore HQ */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">Singapore HQ</h2>
                <div className="text-lg text-muted-foreground">
                  <p>9 Taman Serasi,</p>
                  <p>'Botanic Gardens View'</p>
                  <p>Singapore 257720</p>
                  
                </div>
              </div>

              {/* Remote-friendly */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">Remote-friendly</h2>
                <div className="text-lg text-muted-foreground">
                  <p>Google Meet or Microsoft Teams</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-6 pt-8">
                <a
                  href="http://linkedin.com/company/usekase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-8 w-8" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61566987854004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-8 w-8" />
                </a>
                <a
                  href="http://instagram.com/usekase.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-8 w-8" />
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`pl-10 h-12 placeholder:text-muted-foreground/40 ${
                        errors.name ? "border-destructive" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base font-medium">
                    Company <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className={`pl-10 h-12 placeholder:text-muted-foreground/40 ${
                        errors.company ? "border-destructive" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.company && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Role Field */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-base font-medium">
                    Role <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="role"
                      name="role"
                      type="text"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="CTO, Product Manager, etc."
                      className={`pl-10 h-12 placeholder:text-muted-foreground/40 ${
                        errors.role ? "border-destructive" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.role && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.role}
                    </p>
                  )}
                </div>

                {/* Timeline Field */}
                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-base font-medium">
                    Timeline <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="timeline"
                      name="timeline"
                      type="text"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="ASAP, 1-3 months, etc."
                      className={`pl-10 h-12 placeholder:text-muted-foreground/40 ${
                        errors.timeline ? "border-destructive" : ""
                      }`}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.timeline && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.timeline}
                    </p>
                  )}
                </div>

                {/* Objective Field */}
                <div className="space-y-2">
                  <Label htmlFor="objective" className="text-base font-medium">
                    What you're trying to achieve{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Target className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      id="objective"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      placeholder="Tell us about your AI transformation goals, technical challenges, or business objectives..."
                      className={`pl-10 pt-3 min-h-[140px] resize-none placeholder:text-muted-foreground/40 ${
                        errors.objective ? "border-destructive" : ""
                      }`}
                      disabled={isSubmitting}
                      rows={6}
                    />
                  </div>
                  {errors.objective && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.objective}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {formData.objective.length}/500 characters
                  </p>
                </div>

                {/* Submit Status Messages */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-5 rounded-md border-2 ${
                      submitStatus.type === "success"
                        ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submitStatus.type === "success" ? (
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <p className="font-semibold mb-1">
                          {submitStatus.type === "success"
                            ? "Success!"
                            : "Error"}
                        </p>
                        <p className="text-sm">{submitStatus.message}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
          </Card>
        </div>
      </main>

      <UsekaseFooter />
    </div>
  );
}
