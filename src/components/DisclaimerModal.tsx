import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const DisclaimerModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasSeenDisclaimer", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="h-6 w-6 text-secondary" />
            <DialogTitle className="text-xl">Important Legal Disclaimer</DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-4 pt-4">
            <p>
              <strong>Bar Council of India Compliance Notice</strong>
            </p>
            <p>
              In compliance with the Bar Council of India Rules and the Advocates Act, 1961, 
              advocates are prohibited from soliciting work or advertising, directly or indirectly, 
              by any means whatsoever.
            </p>
            <p>
              This website has been created solely for informational purposes and does not constitute 
              an advertisement, solicitation, invitation or inducement of any sort whatsoever from 
              Shashi Mishra And Associates or any of its members to solicit any work through this website.
            </p>
            <p>
              By accessing this website, you acknowledge and confirm that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You are seeking information on your own accord</li>
              <li>There has been no advertisement, personal communication, solicitation, or invitation from us</li>
              <li>Any information obtained from this website is for informational purposes only</li>
              <li>This does not constitute legal advice or create an attorney-client relationship</li>
              <li>You understand the contents provided are general information and not legal advice</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              The information on this website is provided "as is" without any representations or warranties, 
              express or implied. We make no representations or warranties in relation to the legal information 
              on this website.
            </p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-4">
          <Button onClick={handleAccept} className="bg-primary hover:bg-primary/90">
            I Understand and Accept
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
