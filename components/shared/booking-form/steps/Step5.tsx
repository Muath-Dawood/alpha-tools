import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { images } from "@/lib/data/images";
import { ExistUserSchemaType } from "@/lib/validators/existUserSchema";
import { NewUserSchemaType } from "@/lib/validators/newUserSchema";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

type Step5Props = {
  userType: "exists" | "new";
  setUserType: Dispatch<SetStateAction<"exists" | "new">>;
  newUserForm: UseFormReturn<NewUserSchemaType>;
  existUserForm: UseFormReturn<ExistUserSchemaType>;
  onSubmit: () => void;
};

const Step5 = (props: Step5Props) => {
  const translation = useTranslations("booking");

  return (
    <div className="flex-center w-full flex-col justify-start">
      <div className="flex-center gap-16">
        <div
          className="flex-center group cursor-pointer flex-col gap-2"
          onClick={() => {
            props.setUserType("exists");
          }}
        >
          <div
            className={`${props.userType === "exists" ? "border-primary-background" : "border-[#D9D9D9]"} flex-center h-16 w-16 rounded-full border-2 transition-all duration-300 xs:h-20 xs:w-20 sm:group-hover:-translate-y-1 sm:group-focus:-translate-y-1`}
          >
            <Image
              src={images.existClient}
              alt="exist client"
              className="h-auto w-9 xs:w-11"
              style={{
                filter:
                  props.userType === "exists"
                    ? "invert(46%) sepia(13%) saturate(1471%) hue-rotate(277deg) brightness(100%) contrast(91%)"
                    : "",
              }}
            />
          </div>

          <p className="text-base font-semibold leading-4">
            {translation("exist client")}
          </p>
        </div>

        <div
          className="flex-center group cursor-pointer flex-col gap-2"
          onClick={() => {
            props.setUserType("new");
          }}
        >
          <div
            className={`${props.userType === "new" ? "border-primary-background" : "border-[#D9D9D9]"} flex-center h-16 w-16 rounded-full border-2 transition-all duration-300 xs:h-20 xs:w-20 sm:group-hover:-translate-y-1 sm:group-focus:-translate-y-1`}
          >
            <Image
              src={images.newClient}
              alt="new client"
              className="h-auto w-9 xs:w-11"
              style={{
                filter:
                  props.userType === "new"
                    ? "invert(46%) sepia(13%) saturate(1471%) hue-rotate(277deg) brightness(100%) contrast(91%)"
                    : "",
              }}
            />
          </div>

          <p className="text-base font-semibold leading-4">
            {translation("new client")}
          </p>
        </div>
      </div>

      {props.userType == "exists" ? (
        <Form {...props.existUserForm} key={"exist user"}>
          <form
            onSubmit={props.existUserForm.handleSubmit(props.onSubmit)}
            className="flex-center mx-auto w-full max-w-[44.125rem]"
          >
            <FormField
              control={props.existUserForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="input-label text-[0.9375rem] font-semibold leading-[0.9375rem] text-[#686767]">
                    {translation("phone number")}
                  </FormLabel>
                  <FormControl>
                    <div className="input-wrapper w-full rounded-[0.25rem] border-2 border-[#D6E1E0] px-3 has-[input:focus]:border-secondary-background [&>input]:placeholder:text-[0.9375rem] [&>input]:placeholder:text-[#C4C6C5]">
                      <Input
                        placeholder={translation("phone number placeholder")}
                        value={field.value}
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "");
                          field.onChange(e);
                        }}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      ) : (
        <Form {...props.newUserForm} key={"new user"}>
          <form
            onSubmit={props.newUserForm.handleSubmit(props.onSubmit)}
            className="flex-center mx-auto w-full max-w-[44.125rem] flex-col gap-6"
          >
            <FormField
              control={props.newUserForm.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="input-label text-[0.9375rem] font-semibold leading-[0.9375rem] text-[#686767]">
                    {translation("full name")}
                  </FormLabel>
                  <FormControl>
                    <div className="input-wrapper w-full rounded-[0.25rem] border-2 border-[#D6E1E0] px-3 has-[input:focus]:border-secondary-background [&>input]:placeholder:text-[0.9375rem] [&>input]:placeholder:text-[#C4C6C5]">
                      <Input
                        placeholder={translation("full name placeholder")}
                        {...field}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={props.newUserForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="input-label text-[0.9375rem] font-semibold leading-[0.9375rem] text-[#686767]">
                    {translation("phone number")}
                  </FormLabel>
                  <FormControl>
                    <div className="input-wrapper w-full rounded-[0.25rem] border-2 border-[#D6E1E0] px-3 has-[input:focus]:border-secondary-background [&>input]:placeholder:text-[0.9375rem] [&>input]:placeholder:text-[#C4C6C5]">
                      <Input
                        placeholder={translation("phone number placeholder")}
                        value={field.value}
                        onChange={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, "");
                          field.onChange(e);
                        }}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      )}
    </div>
  );
};

export default Step5;
