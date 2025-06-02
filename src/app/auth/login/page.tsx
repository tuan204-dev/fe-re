"use client";
import {
    COOKIES_ACCESS_TOKEN,
    COOKIES_REFRESH_TOKEN,
} from "@/constants/cookies";
import { updateUser } from "@/redux/slices/authSlice";
import AuthServices from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "antd";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaBriefcase } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { z } from "zod";

const schema = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof schema>;

const LoginPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginFormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const {
                data: { accessToken, refreshToken, user },
                success,
            } = await AuthServices.login({
                email: data.email,
                password: data.password,
            });

            if (!success) {
                toast.error("Login failed. Please check your credentials.");
                return;
            }

            dispatch(updateUser(user));

            setCookie(COOKIES_ACCESS_TOKEN, accessToken);
            setCookie(COOKIES_REFRESH_TOKEN, refreshToken);

            toast.success("Login successful!");
            router.push("/");
        } catch (e) {
            console.error("Login error:", e);
            toast.error("Login failed. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-y-3 min-h-screen">
            <h1 className="text-xl font-bold flex items-center gap-2 text-blue-600">
                <FaBriefcase className="text-blue-600" />
                <span>RecruitPro</span>
            </h1>

            <p className="text-gray-500">Login to your account</p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4 w-[300px]"
            >
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="email" className="text-sm text-gray-950">
                        Email
                    </label>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <Input
                                id="email"
                                {...field}
                                placeholder="Enter your email"
                                className="w-full"
                                status={errors.email ? "error" : undefined}
                            />
                        )}
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="password" className="text-sm text-gray-950">
                        Password
                    </label>
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
                </div>

                <Button type="primary" htmlType="submit">
                    Login
                </Button>

                <Link
                    href={"/auth/register"}
                    className="text-xs text-center text-blue-500 hover:underline"
                >
                    {"Don't have an account? Register"}
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;
