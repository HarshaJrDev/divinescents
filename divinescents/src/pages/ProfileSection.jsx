import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AccountModal() {
  const [user] = useState({
    name: "Jane Doe",
    email: "jane@example.com",
    joined: "January 2024",
    avatar: "https://i.pravatar.cc/100",
  });

  const handleLogout = () => {
    alert("Logged out!");
    // Add your logout logic here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Manage Account</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Account Details</DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-xs text-gray-500">Joined: {user.joined}</p>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button variant="secondary" onClick={() => alert("Edit account coming soon!")}>
            Edit Info
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <DialogFooter>
          <p className="text-xs text-muted-foreground mt-2 text-center w-full">
            You can access your orders and settings from the profile page.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
