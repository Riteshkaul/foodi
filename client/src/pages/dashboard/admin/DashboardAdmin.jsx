import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaUsers } from "react-icons/fa6";

const DashboardAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: stats = [] } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });
  // console.log(stats);
  return (
    <div className="w-full md:w-[870px] px-4 mx-auto">
      <h2 className="text-2xl font-semibold my-4">Hi ,{user.displayName}</h2>
      {/* Div stats */}
      <div className="stats stats-vertical w-full lg:stats-horizontal shadow">
        <div className="stat bg-emerald-200">
          <div className=" stat-figure text-4xl">
            <FaRupeeSign />
          </div>
          <div className="stat-title"> Revenue</div>
          <div className="stat-value  ">{stats.revenue}</div>
        </div>

        <div className="stat bg-orange-200">
          <div className=" stat-figure text-4xl">
            <FaUsers />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
        </div>

        <div className="stat bg-indigo-400">
          <div className=" stat-figure text-4xl">
            <FaBook />
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItem}</div>
        </div>
        <div className="stat bg-purple-300">
          <div className=" stat-figure text-4xl">
            <FaShoppingCart />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
