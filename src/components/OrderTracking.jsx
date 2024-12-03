import React from "react";

const OrderTrackingHorizontal = () => {
  const steps = [
    { status: "Order Processed", icon: "📝", isCompleted: true },
    { status: "Order Shipped", icon: "📦", isCompleted: false },
    { status: "Order En Route", icon: "🚚", isCompleted: false },
    { status: "Order Arrived", icon: "🏠", isCompleted: false },
  ];

  const currentStepIndex = steps.findIndex((step) => !step.isCompleted);

  return (
    <div className="h-[650px] flex justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 overflow-hidden">
        {/* Order Info */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-semibold text-gray-800">
            ORDER <span className="text-blue-600">#Y34XDHR</span>
          </h3>
          <div>
            <p className="text-sm text-gray-500">
              Expected Arrival: <span className="font-bold text-gray-700">6 Dec 2024</span>
            </p>
            <p className="text-sm text-gray-500">
              USPS: <span className="font-semibold">2340945672423422898</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative flex">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              {/* Line Connector */}
              {index > 0 && (
                <div
                  className={`absolute h-1 top-1/2 w-full ${
                    index <= currentStepIndex
                      ? "bg-purple-500"
                      : "bg-gray-300"
                  }`}
                  style={{ left: "-50%", right: "50%" }}
                ></div>
              )}

              {/* Step Indicator */}
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 ${
                  index < currentStepIndex
                    ? "bg-purple-500 border-purple-500 text-white"
                    : index === currentStepIndex
                    ? "bg-white border-purple-500 text-purple-500 animate-pulse"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                {index <= currentStepIndex ? "✔" : step.icon}
              </div>

              {/* Step Label */}
              <p
                className={`mt-2 text-sm font-medium ${
                  index <= currentStepIndex
                    ? "text-gray-800"
                    : "text-gray-400"
                }`}
              >
                {step.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingHorizontal;
