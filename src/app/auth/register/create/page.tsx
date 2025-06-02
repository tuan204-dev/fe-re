/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Gender } from "@/constants/enum";
import AuthServices from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select } from "antd";
import { isUndefined, omit, omitBy } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaBriefcase } from "react-icons/fa";
import { z } from "zod";

const schema = z
    .object({
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(32, "Password must be at most 32 characters"),
        confirmPassword: z.string(),
        firstName: z
            .string()
            .min(1, "First name is required")
            .max(100, "First name must be at most 100 characters"),
        lastName: z
            .string()
            .min(1, "Last name is required")
            .max(100, "Last name must be at most 100 characters"),
        phone: z.string().optional(),
        gender: z.number(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

type FormValues = z.infer<typeof schema>;

const RegisterPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            phone: "",
            gender: Gender.UNKNOWN
        }
    });

    const token = searchParams.get("token");

    useEffect(() => {
        if (!token) {
            toast.error("Token is required to register");
            router.push("/auth/login");
        }
    }, [token])

    const onSubmit = async (data: FormValues) => {
        let toastId;
        try {
            toastId = toast.loading("Registering...");
            const objectCleaned = omitBy(data, isUndefined);

            const submitData = {
                ...omit(objectCleaned, ["confirmPassword"]),
                token,
            };

            await AuthServices.createRecruiter(submitData);

            toast.success("Registration successful!");

            router.push("/auth/login");
        } catch (e) {
            console.error("Registration error:", e);
            toast.error("Registration failed. Please try again later.");
        } finally {
            if (toastId) {
                toast.dismiss(toastId);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-y-3 min-h-screen">
            <h1 className="text-xl font-bold flex items-center gap-2 text-blue-600">
                <FaBriefcase className="text-blue-600" />
                <span>RecruitPro</span>
            </h1>

            <p className="text-gray-500">Register a new account</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4 w-[380px]"
            >
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="password" className="text-sm text-gray-950">
                        Password <span className="text-red-600">*</span>
                    </label>
                    <div className="flex flex-col">
                        <Controller
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <Input.Password
                                    id="password"
                                    {...field}
                                    placeholder="Enter your password"
                                    className="w-full"
                                    status={errors.password ? "error" : undefined}
                                />
                            )}
                        />

                        <ErrorMessage message={errors.password?.message} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-1">
                    <label htmlFor="confirmPassword" className="text-sm text-gray-950">
                        Confirm Password <span className="text-red-600">*</span>
                    </label>
                    <div className="flex flex-col">
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <Input.Password
                                    id="confirmPassword"
                                    {...field}
                                    placeholder="Enter your password"
                                    className="w-full"
                                    status={errors.confirmPassword ? "error" : undefined}
                                />
                            )}
                        />

                        <ErrorMessage message={errors.confirmPassword?.message} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3">
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="firstName" className="text-sm text-gray-950">
                            First name <span className="text-red-600">*</span>
                        </label>
                        <div className="flex flex-col">
                            <Controller
                                control={control}
                                name="firstName"
                                render={({ field }) => (
                                    <Input
                                        id="firstName"
                                        {...field}
                                        placeholder="Enter your first name"
                                        className="w-full"
                                        status={errors.firstName ? "error" : undefined}
                                    />
                                )}
                            />

                            <ErrorMessage message={errors.firstName?.message} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="lastName" className="text-sm text-gray-950">
                            Last name <span className="text-red-600">*</span>
                        </label>
                        <div className="flex flex-col">
                            <Controller
                                control={control}
                                name="lastName"
                                render={({ field }) => (
                                    <Input
                                        id="lastName"
                                        {...field}
                                        placeholder="Enter your last name"
                                        className="w-full"
                                        status={errors.lastName ? "error" : undefined}
                                    />
                                )}
                            />

                            <ErrorMessage message={errors.lastName?.message} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3">
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="phone" className="text-sm text-gray-950">
                            Phone
                        </label>
                        <div className="flex flex-col">
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                    <Input
                                        id="phone"
                                        {...field}
                                        placeholder="Enter your phone number"
                                        className="w-full"
                                        status={errors.phone ? "error" : undefined}
                                    />
                                )}
                            />

                            <ErrorMessage message={errors.phone?.message} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="gender" className="text-sm text-gray-950">
                            Gender <span className="text-red-600">*</span>
                        </label>
                        <div className="flex flex-col">
                            <Controller
                                control={control}
                                name="gender"
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={[
                                            {
                                                value: Gender.UNKNOWN,
                                                label: "Unknown",
                                            },
                                            {
                                                value: Gender.MALE,
                                                label: "Male",
                                            },
                                            {
                                                value: Gender.FEMALE,
                                                label: "Female",
                                            },
                                            {
                                                value: Gender.OTHER,
                                                label: "Other",
                                            },

                                        ]}
                                    />
                                )}
                            />

                            <ErrorMessage message={errors.gender?.message} />
                        </div>
                    </div>
                </div>

                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </form>
        </div>
    );
};

export default RegisterPage;
