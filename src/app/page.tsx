import { Stopwatch } from "@/components/Stopwatch";

export default function Home() {
  const startTime = Date.now();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-48 p-24">
      <div className="flex flex-col items-center justify-between gap-4">
        <h1 className="text-4xl">Benefit #3: Speed</h1>
        <h3 className="text-lg">
          Page speed is incredibly important. This is why pages are built to
          display in <strong>milli</strong>seconds, not just <u>seconds</u>.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-between gap-4">
        <Stopwatch startTime={startTime} />
      </div>
    </main>
  );
}
