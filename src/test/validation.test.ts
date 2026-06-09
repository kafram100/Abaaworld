import { describe, it, expect } from "vitest";
import { validateContactForm } from "../../server/src/middleware/validation";

describe("validateContactForm", () => {
  it("should validate correct form data", () => {
    const data = {
      name: "John Doe",
      email: "john@example.com",
      organization: "Acme Corp",
      inquiry_type: "Speaking",
      message: "Hello, I would like to book you for a speaking engagement.",
    };

    const result = validateContactForm(data);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.name).toBe("John Doe");
      expect(result.data.email).toBe("john@example.com");
      expect(result.data.organization).toBe("Acme Corp");
      expect(result.data.inquiry_type).toBe("Speaking");
      expect(result.data.message).toBe("Hello, I would like to book you for a speaking engagement.");
    }
  });

  it("should fail validation if name is empty", () => {
    const data = {
      name: "",
      email: "john@example.com",
      inquiry_type: "Speaking",
      message: "Hello there.",
    };

    const result = validateContactForm(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.error).toContain("Name is required");
    }
  });

  it("should fail validation if email is invalid", () => {
    const data = {
      name: "John Doe",
      email: "invalid-email",
      inquiry_type: "Speaking",
      message: "Hello there.",
    };

    const result = validateContactForm(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.error).toContain("Valid email address required");
    }
  });

  it("should fail validation if message is empty", () => {
    const data = {
      name: "John Doe",
      email: "john@example.com",
      inquiry_type: "Speaking",
      message: "",
    };

    const result = validateContactForm(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.error).toContain("Message is required");
    }
  });

  it("should fail validation if organization name is too long", () => {
    const data = {
      name: "John Doe",
      email: "john@example.com",
      organization: "a".repeat(201),
      inquiry_type: "Speaking",
      message: "Hello there.",
    };

    const result = validateContactForm(data);
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.error).toContain("Organization name is too long");
    }
  });
});
