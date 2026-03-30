import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2, ClipboardList, User, MapPin, Heart, Stethoscope, Pill, AlertTriangle } from "lucide-react";
import { SEO } from "@/components/seo";
import { SummarizeWithAI } from "@/components/summarize-with-ai";
import { toast } from "sonner";

interface FormData {
  title: string;
  firstName: string;
  surname: string;
  dateOfBirth: string;
  height: string;
  weight: string;
  address: string;
  postCode: string;
  email: string;
  telephone: string;
  mobile: string;
  smoke: string;
  recreationalDrugs: string;
  exercise: string;
  drink: string;
  unitsPerWeek: string;
  pregnantLactating: string;
  haveChildren: string;
  childrenAges: string;
  interestedProcedures1: string;
  interestedProcedures2: string;
  interestedProcedures3: string;
  desiredResults: string;
  medicalConditions1: string;
  medicalConditions2: string;
  medicalConditions3: string;
  medications1: string;
  medications2: string;
  medications3: string;
  medications4: string;
  previousSurgery1: string;
  previousSurgery2: string;
  previousSurgery3: string;
  anemiaDetails: string;
  highBloodPressure: boolean;
  diabetes: boolean;
  bleedingProblems: boolean;
  skinProblems: boolean;
  medicationAllergies: boolean;
  foodAllergies: boolean;
  bloodThinners: boolean;
  anaesthesiaReaction: boolean;
  otherMedicalProblems: boolean;
  otherMedicalDetails: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  title: "",
  firstName: "",
  surname: "",
  dateOfBirth: "",
  height: "",
  weight: "",
  address: "",
  postCode: "",
  email: "",
  telephone: "",
  mobile: "",
  smoke: "",
  recreationalDrugs: "",
  exercise: "",
  drink: "",
  unitsPerWeek: "",
  pregnantLactating: "",
  haveChildren: "",
  childrenAges: "",
  interestedProcedures1: "",
  interestedProcedures2: "",
  interestedProcedures3: "",
  desiredResults: "",
  medicalConditions1: "",
  medicalConditions2: "",
  medicalConditions3: "",
  medications1: "",
  medications2: "",
  medications3: "",
  medications4: "",
  previousSurgery1: "",
  previousSurgery2: "",
  previousSurgery3: "",
  anemiaDetails: "",
  highBloodPressure: false,
  diabetes: false,
  bleedingProblems: false,
  skinProblems: false,
  medicationAllergies: false,
  foodAllergies: false,
  bloodThinners: false,
  anaesthesiaReaction: false,
  otherMedicalProblems: false,
  otherMedicalDetails: "",
  additionalInfo: "",
};

export default function HealthProfile() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.surname || !formData.email || !formData.height || !formData.weight || !formData.telephone) {
      toast.error("Please fill in all required fields (name, email, height, weight, and telephone).");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/health-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        toast.success("Your health profile has been submitted successfully!");
      } else {
        toast.error(data.error || "Failed to submit. Please try again.");
      }
    } catch {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="pt-40 pb-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-green-50 rounded-2xl p-12">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4" data-testid="text-submission-success">
                Thank You!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Your Personal Health Profile has been submitted successfully. Our medical team will review your information and contact you shortly.
              </p>
              <Button
                onClick={() => (window.location.href = "/")}
                className="bg-primary hover:bg-primary/90"
                data-testid="button-back-home"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Personal Health Profile: Am I Eligible for Bariatric Surgery?"
        description="Complete your personal health profile to find out if you are eligible for bariatric surgery at Istanbul Bariatric Center. Free assessment by our medical team."
        keywords="bariatric surgery eligibility, health profile, weight loss surgery assessment, gastric sleeve eligibility"
        url="/health-profile"
      />
      <Navbar />

      <section className="relative text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/health-profile-hero.webp"
            alt="Medical consultation for bariatric surgery eligibility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-health-profile-title">
            Personal Health Profile
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Complete this form so our medical team can assess your eligibility for bariatric surgery
          </p>
          <SummarizeWithAI variant="dark" />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-10">

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="e.g., Mr, Mrs, Ms" value={formData.title} onChange={(e) => updateField("title", e.target.value)} data-testid="input-title" />
                </div>
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="First Name" value={formData.firstName} onChange={(e) => updateField("firstName", e.target.value)} required data-testid="input-first-name" />
                </div>
                <div>
                  <Label htmlFor="surname">Surname *</Label>
                  <Input id="surname" placeholder="Surname" value={formData.surname} onChange={(e) => updateField("surname", e.target.value)} required data-testid="input-surname" />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" value={formData.dateOfBirth} onChange={(e) => updateField("dateOfBirth", e.target.value)} data-testid="input-dob" />
                </div>
                <div>
                  <Label htmlFor="height">Height <span className="text-red-500">*</span></Label>
                  <Input id="height" required placeholder={'e.g., 175 cm or 5\'9"'} value={formData.height} onChange={(e) => updateField("height", e.target.value)} data-testid="input-height" />
                </div>
                <div>
                  <Label htmlFor="weight">Weight <span className="text-red-500">*</span></Label>
                  <Input id="weight" required placeholder="e.g., 120 kg or 265 lbs" value={formData.weight} onChange={(e) => updateField("weight", e.target.value)} data-testid="input-weight" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Enter Your Contact Information for Bariatric Surgery Eligibility</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Your address" value={formData.address} onChange={(e) => updateField("address", e.target.value)} data-testid="input-address" />
                </div>
                <div>
                  <Label htmlFor="postCode">Post Code</Label>
                  <Input id="postCode" placeholder="Post Code" value={formData.postCode} onChange={(e) => updateField("postCode", e.target.value)} data-testid="input-postcode" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => updateField("email", e.target.value)} required data-testid="input-email" />
                </div>
                <div>
                  <Label htmlFor="telephone">Telephone <span className="text-red-500">*</span></Label>
                  <Input id="telephone" required placeholder="Telephone number" value={formData.telephone} onChange={(e) => updateField("telephone", e.target.value)} data-testid="input-telephone" />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input id="mobile" placeholder="Mobile number" value={formData.mobile} onChange={(e) => updateField("mobile", e.target.value)} data-testid="input-mobile" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Lifestyle</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="smoke">Do you smoke?</Label>
                  <select id="smoke" value={formData.smoke} onChange={(e) => updateField("smoke", e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" data-testid="select-smoke">
                    <option value="">Select...</option>
                    <option value="I don't smoke">I don't smoke</option>
                    <option value="Cigarettes">Cigarettes</option>
                    <option value="Vape">Vape</option>
                    <option value="Cigar">Cigar</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="drugs">Recreational Drugs?</Label>
                  <select id="drugs" value={formData.recreationalDrugs} onChange={(e) => updateField("recreationalDrugs", e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" data-testid="select-drugs">
                    <option value="">Select...</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="exercise">Do you exercise?</Label>
                  <select id="exercise" value={formData.exercise} onChange={(e) => updateField("exercise", e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" data-testid="select-exercise">
                    <option value="">Select...</option>
                    <option value="Never">Never</option>
                    <option value="Regularly">Regularly</option>
                    <option value="Occasionally">Occasionally</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="drink">Do you drink alcohol?</Label>
                  <select id="drink" value={formData.drink} onChange={(e) => updateField("drink", e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" data-testid="select-drink">
                    <option value="">Select...</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                {formData.drink === "Yes" && (
                  <div>
                    <Label htmlFor="units">Units per week</Label>
                    <Input id="units" placeholder="e.g., 10" value={formData.unitsPerWeek} onChange={(e) => updateField("unitsPerWeek", e.target.value)} data-testid="input-units" />
                  </div>
                )}
                <div>
                  <Label htmlFor="pregnant">Are you Pregnant/Lactating?</Label>
                  <select id="pregnant" value={formData.pregnantLactating} onChange={(e) => updateField("pregnantLactating", e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" data-testid="select-pregnant">
                    <option value="">Select...</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="children">Do you have children?</Label>
                  <select id="children" value={formData.haveChildren} onChange={(e) => updateField("haveChildren", e.target.value)} className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm" data-testid="select-children">
                    <option value="">Select...</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                {formData.haveChildren === "Yes" && (
                  <div className="md:col-span-2">
                    <Label htmlFor="childrenAges">Ages of your children</Label>
                    <Input id="childrenAges" placeholder="e.g., 5, 8, 12" value={formData.childrenAges} onChange={(e) => updateField("childrenAges", e.target.value)} data-testid="input-children-ages" />
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Surgery Interest</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <Label>What kind of surgical procedure(s) are you interested in?</Label>
                  <div className="grid md:grid-cols-3 gap-3 mt-2">
                    <Input placeholder="Procedure 1" value={formData.interestedProcedures1} onChange={(e) => updateField("interestedProcedures1", e.target.value)} data-testid="input-procedure-1" />
                    <Input placeholder="Procedure 2" value={formData.interestedProcedures2} onChange={(e) => updateField("interestedProcedures2", e.target.value)} data-testid="input-procedure-2" />
                    <Input placeholder="Procedure 3" value={formData.interestedProcedures3} onChange={(e) => updateField("interestedProcedures3", e.target.value)} data-testid="input-procedure-3" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="results">What are the results you wish to achieve?</Label>
                  <Input id="results" placeholder="Describe your desired results" value={formData.desiredResults} onChange={(e) => updateField("desiredResults", e.target.value)} data-testid="input-desired-results" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Medical History</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <Label>Do you have any medical conditions?</Label>
                  <div className="grid md:grid-cols-3 gap-3 mt-2">
                    <Input placeholder="Condition 1" value={formData.medicalConditions1} onChange={(e) => updateField("medicalConditions1", e.target.value)} data-testid="input-condition-1" />
                    <Input placeholder="Condition 2" value={formData.medicalConditions2} onChange={(e) => updateField("medicalConditions2", e.target.value)} data-testid="input-condition-2" />
                    <Input placeholder="Condition 3" value={formData.medicalConditions3} onChange={(e) => updateField("medicalConditions3", e.target.value)} data-testid="input-condition-3" />
                  </div>
                </div>

                <div>
                  <Label>Are you taking any medication or herbal preparations? State name and dosage</Label>
                  <div className="grid md:grid-cols-2 gap-3 mt-2">
                    <Input placeholder="Medication 1" value={formData.medications1} onChange={(e) => updateField("medications1", e.target.value)} data-testid="input-medication-1" />
                    <Input placeholder="Medication 2" value={formData.medications2} onChange={(e) => updateField("medications2", e.target.value)} data-testid="input-medication-2" />
                    <Input placeholder="Medication 3" value={formData.medications3} onChange={(e) => updateField("medications3", e.target.value)} data-testid="input-medication-3" />
                    <Input placeholder="Medication 4" value={formData.medications4} onChange={(e) => updateField("medications4", e.target.value)} data-testid="input-medication-4" />
                  </div>
                </div>

                <div>
                  <Label>Have you had any cosmetic surgery before? Please state year and procedures</Label>
                  <div className="grid md:grid-cols-3 gap-3 mt-2">
                    <Input placeholder="Surgery 1" value={formData.previousSurgery1} onChange={(e) => updateField("previousSurgery1", e.target.value)} data-testid="input-surgery-1" />
                    <Input placeholder="Surgery 2" value={formData.previousSurgery2} onChange={(e) => updateField("previousSurgery2", e.target.value)} data-testid="input-surgery-2" />
                    <Input placeholder="Surgery 3" value={formData.previousSurgery3} onChange={(e) => updateField("previousSurgery3", e.target.value)} data-testid="input-surgery-3" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="anemia">Are you anemic or have a history of jaundice, hepatitis or HIV? If yes, please provide details</Label>
                  <Input id="anemia" placeholder="Details..." value={formData.anemiaDetails} onChange={(e) => updateField("anemiaDetails", e.target.value)} className="mt-2" data-testid="input-anemia" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Medical Checklist</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4">Please check any that apply to you:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { field: "highBloodPressure" as const, label: "High Blood Pressure / Hypertension" },
                  { field: "diabetes" as const, label: "Diabetes" },
                  { field: "bleedingProblems" as const, label: "Any bleeding problems" },
                  { field: "skinProblems" as const, label: "Any skin problems" },
                  { field: "medicationAllergies" as const, label: "Allergies to medication" },
                  { field: "foodAllergies" as const, label: "Food allergies" },
                  { field: "bloodThinners" as const, label: "Do you take aspirin or blood thinners" },
                  { field: "anaesthesiaReaction" as const, label: "Any reaction to local or general anaesthesia" },
                ].map((item) => (
                  <label key={item.field} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      checked={formData[item.field] as boolean}
                      onChange={(e) => updateField(item.field, e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      data-testid={`checkbox-${item.field}`}
                    />
                    <span className="text-sm text-gray-700">{item.label}</span>
                  </label>
                ))}
              </div>
              <div className="mt-4">
                <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.otherMedicalProblems}
                    onChange={(e) => updateField("otherMedicalProblems", e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    data-testid="checkbox-other-medical"
                  />
                  <span className="text-sm text-gray-700">Other medical problems, including communicable diseases</span>
                </label>
                {formData.otherMedicalProblems && (
                  <Input placeholder="Please describe..." value={formData.otherMedicalDetails} onChange={(e) => updateField("otherMedicalDetails", e.target.value)} className="mt-2 ml-10" data-testid="input-other-medical" />
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Pill className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Additional Information</h2>
              </div>
              <Label htmlFor="additionalInfo">
                Is there anything your surgeon should be aware of for the management of your treatment and/or to make your stay at the hospital more comfortable?
              </Label>
              <Textarea
                id="additionalInfo"
                placeholder="Please share any additional information..."
                value={formData.additionalInfo}
                onChange={(e) => updateField("additionalInfo", e.target.value)}
                className="mt-2 min-h-[120px]"
                data-testid="textarea-additional-info"
              />
            </div>

            <div className="text-center pb-8">
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-full shadow-xl transition-transform hover:scale-105"
                data-testid="button-submit-profile"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Health Profile"
                )}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Your information is kept strictly confidential and will only be reviewed by our medical team.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
