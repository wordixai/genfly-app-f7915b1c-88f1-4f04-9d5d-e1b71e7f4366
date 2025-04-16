import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarNav } from "@/components/SidebarNav";
import { MainContent } from "@/components/MainContent";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

export default function Index() {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarNav />
        </Sidebar>
        <main className="flex-1 p-6">
          <MainContent />
        </main>
      </div>
    </SidebarProvider>
  );
}