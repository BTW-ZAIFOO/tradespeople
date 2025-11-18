import React, { useState } from "react";
import QuickAccessCards from "../components/dashboard/QuickAccessCards";

const TicketsPage = () => {
  const [tickets] = useState([
    {
      id: "TKT-001",
      subject: "Job Quality Issue",
      status: "Open",
      priority: "High",
      created: "2025-11-01",
      updated: "2025-11-03",
      description: "The plumbing work was incomplete",
    },
    {
      id: "TKT-002",
      subject: "Payment Not Received",
      status: "In Progress",
      priority: "High",
      created: "2025-10-28",
      updated: "2025-11-02",
      description: "Payment for Job #2345 not received",
    },
    {
      id: "TKT-003",
      subject: "Account Access Issue",
      status: "Resolved",
      priority: "Normal",
      created: "2025-10-15",
      updated: "2025-10-20",
      description: "Unable to reset password",
    },
    {
      id: "TKT-004",
      subject: "General Inquiry",
      status: "Resolved",
      priority: "Low",
      created: "2025-10-10",
      updated: "2025-10-11",
      description: "Question about premium membership",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600 font-bold";
      case "Normal":
        return "text-orange-600 font-semibold";
      case "Low":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-gray-50 min-h-full">
       {/* Quick Access Cards */}
        <QuickAccessCards />

      <div className="max-w-7xl mx-auto py-8 px-24">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              My Support Tickets
            </h1>
            <p className="text-gray-600">
              View and manage all your support tickets
            </p>
          </div>

          {/* Tickets List */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">
                    Ticket ID
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">
                    Subject
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">
                    Priority
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">
                    Created
                  </th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">
                    Updated
                  </th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {ticket.subject}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          ticket.status
                        )}`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 text-sm ${getPriorityColor(
                        ticket.priority
                      )}`}
                    >
                      {ticket.priority}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {ticket.created}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {ticket.updated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {tickets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No support tickets found.</p>
              <p className="text-gray-400 text-sm mt-2">
                Create a new ticket to get support.
              </p>
            </div>
          )}

          {/* Ticket Details */}
          {tickets.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Latest Ticket Details
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Ticket ID
                    </p>
                    <p className="text-gray-800 font-semibold mt-1">
                      {tickets[0].id}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Status
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1 ${getStatusColor(
                        tickets[0].status
                      )}`}
                    >
                      {tickets[0].status}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    Subject
                  </p>
                  <p className="text-gray-800 font-semibold mt-1">
                    {tickets[0].subject}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase">
                    Description
                  </p>
                  <p className="text-gray-600 mt-2">{tickets[0].description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
