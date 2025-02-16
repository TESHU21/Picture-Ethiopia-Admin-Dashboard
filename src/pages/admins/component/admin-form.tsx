import { z } from "zod";

import FormComp from "@/components/form/form-comp";
import { adminFormFields } from "./form-data";
import { type AdminFormProps } from "./edit-admin";

type FormValues = z.infer<typeof formSchema>;

// form schema for adding admins
const formSchema = z.object({
  
  email: z.string().email(),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});

// form schema when in editing mode
const editFormSchema = z.object({
  
  email: z.string().email(),

});

const AdminForm = ({ admin, submitFn, isPending, error }: AdminFormProps) => {
  // default values
  const defaultValues = {
   
    email: admin ? admin.email : "",
  
    password: "",
  };

  // form fields for the admin form (excludes the password field when in editing mode)
  const formFields = admin
    ? adminFormFields.filter((field) => field.type !== "password")
    : [...adminFormFields];

  // submit handler function
  function handleSubmit(values: FormValues) {
    // remove the "0" or "+251" from a phone number

    // submit the data
    submitFn({values});
  }
  return (
    <div>
      <FormComp
        formFields={formFields}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        formSchema={admin ? editFormSchema : formSchema}
        error={error}
        isLoading={isPending}
        btn="Submit"
      />
    </div>
  );
};

export default AdminForm;
