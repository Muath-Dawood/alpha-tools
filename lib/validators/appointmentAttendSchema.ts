import { z } from "zod";
export const appointmentAttendFormSchemaMaker = () => {
  return z.object({
    type: z.string().min(1),
    key: z.string().min(1),
  });
};

export const appointmentAttendDefaultValues = {
  type: "",
  key: "",
};

export const appointmentAttendFeilds = ["type", "key"] as const;

export type AppointmentAttendSchemaType = z.infer<
  ReturnType<typeof appointmentAttendFormSchemaMaker>
>;
