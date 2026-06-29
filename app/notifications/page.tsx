import { Suspense } from "react";
import dynamic from "next/dynamic";

const NotificationsPageContent = dynamic(
  () => import("@/components/notifications/NotificationsPageContent"),
  { ssr: false },
);

export const metadata = {
  title: "Notifications | TrustLink",
  description: "View escrow status updates, shipping alerts, and dispute notifications.",
};

export default function NotificationsPage() {
  return (
    <Suspense fallback={null}>
      <NotificationsPageContent />
    </Suspense>
  );
}
