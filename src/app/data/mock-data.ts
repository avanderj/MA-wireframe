import {
    GraduationCap,
    Key,
    Flag,
    HelpCircle,
    BookOpen,
    FileText,
} from "lucide-react";

export const announcements = [
    {
        id: 1,
        title: "New Security Policy Updates",
        excerpt:
            "Important changes to multi-factor authentication requirements effective January 1st.",
        date: "Dec 18, 2024",
        category: "Security",
        urgent: true,
    },
    {
        id: 2,
        title: "Holiday Schedule: IT Support Hours",
        excerpt:
            "IT support will have modified hours during the holiday period. Emergency support remains available 24/7.",
        date: "Dec 15, 2024",
        category: "Announcement",
        urgent: false,
    },
    {
        id: 3,
        title: "Workday System Upgrade Completed",
        excerpt:
            "The Workday system upgrade has been successfully completed. Check out the new features available.",
        date: "Dec 12, 2024",
        category: "Update",
        urgent: false,
    },
];

export const actionItems = [
    {
        id: 1,
        title: "Complete Cyber Security Training",
        description: "Annual security awareness training - Due by Dec 31st",
        icon: GraduationCap,
        urgent: true,
        progress: 60,
        link: "#",
        dueDate: "Dec 31, 2024",
    },
    {
        id: 2,
        title: "Change Your Password",
        description: "Your password has expired and needs to be updated",
        icon: Key,
        urgent: true,
        link: "#",
        status: "Overdue",
    },
];

export const resources = [
    {
        id: 1,
        title: "Report Phishing",
        description: "Report suspicious emails and security threats",
        icon: Flag,
        urgent: false,
        link: "#",
    },
    {
        id: 2,
        title: "IT Service Desk",
        description: "Submit support tickets and track requests",
        icon: HelpCircle,
        urgent: false,
        link: "#",
    },
    {
        id: 3,
        title: "Employee Handbook",
        description: "Policies, procedures, and guidelines",
        icon: BookOpen,
        urgent: false,
        link: "#",
    },
    {
        id: 4,
        title: "IT Documentation",
        description: "Technical guides and how-to articles",
        icon: FileText,
        urgent: false,
        link: "#",
    },
];
