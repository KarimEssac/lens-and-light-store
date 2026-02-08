interface ProgressStepperProps {
  currentStep: number;
}

export default function ProgressStepper({ currentStep }: ProgressStepperProps) {
  const steps = [
    { number: 1, label: 'Shipping', icon: 'check' },
    { number: 2, label: 'Payment', icon: '2' },
    { number: 3, label: 'Review', icon: '3' },
  ];

  return (
    <div className="mb-10 max-w-3xl mx-auto">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-10" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 -z-10"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-4"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step.number < currentStep
                  ? 'bg-primary text-white'
                  : step.number === currentStep
                  ? 'bg-primary text-white ring-4 ring-primary/20'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
              }`}
            >
              {step.number < currentStep ? (
                <span className="material-symbols-outlined">check</span>
              ) : (
                step.number
              )}
            </div>
            <span
              className={`text-sm ${
                step.number <= currentStep
                  ? 'font-bold text-primary'
                  : 'font-medium text-slate-500'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}