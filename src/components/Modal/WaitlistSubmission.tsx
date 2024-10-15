import Link from "../Link";

const WaitlistSubmission = () => {
  return (
    <div className="container max-w-lg mx-auto">
      <div className="border border-studycrest-2 bg-white rounded-xl px-5 pt-5 pb-7">
        <p className="pb-5 text-lg font-semibold text-center">
          We&#39;re excited to invite you to join our exclusive CrestStudy
          community!
        </p>
        <p className="pb-7 text-center">
          As a member, you&#39;ll receive: First-hand updates on launch dates
          and future feature releases, a chance to be an Ambassador, and the
          opportunity to provide personal feedback on the app to help us make it
          even better for students like you.
        </p>
        <div className="text-center">
          <Link
            href={"https://chat.whatsapp.com/Ix1HTUsScx8HrcIHkS1zAj"}
            title={"Join WhatsApp Community"}
            extraStyle="text-white border border-studycrest-primary bg-studycrest-primary rounded-lg px-4 py-2 cursor-pointer"
            external={true}
          />
        </div>
      </div>
    </div>
  );
};

export default WaitlistSubmission;
