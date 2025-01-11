import { Layout } from "@/components/layout";
import { CodePreview } from "@/components/code-preview";
import { Button } from "@/components/ui/button";
import { CheckCircle, HelpCircle } from "lucide-react";
import { Footer } from "@/components/footer";
import Link from "next/link";

const jsIntegrationCode = `// Install Vite
npm create vite@latest my-project -- --template react

// Go to project directory
cd my-project

// Install Rewrap
npm i rewrap-vite-tailwind

// Initialize the package
vite-tailwind-installer`;

export default function RewrapDocsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
          How to use Rewrap
        </h1>

        <div className="space-y-6 md:space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              React Integration
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Here's how to use Rewrap to add utility classes to your React
              project:
            </p>
            <CodePreview code={jsIntegrationCode} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center">
              <CheckCircle className="mr-2" size={24} />
              Integration Steps
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Install Rewrap using npm or yarn.</li>
              <li>Initialize the project globally.</li>
              <li>Start using Tailwind.</li>
              <li>
                Add utility classes to your elements using the className prop.
              </li>
              <li>Customize your styles using the provided utility classes.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
              Utility Classes Reference
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              For a complete list of available utility classes and their usage,
              please refer to our detailed documentation.
            </p>
            <Link href="https://tailwindcss.com/docs/utility-first">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Full Class Reference
              </Button>
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4 flex items-center">
              <HelpCircle className="mr-2" size={24} />
              Need Help?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              If you need assistance with integration or have any questions, our
              support team is here to help. Check out our{" "}
              <a href="/docs" className="text-purple-600 hover:underline">
                documentation
              </a>{" "}
              or{" "}
              <a
                href="https://x.com/iamajfred_"
                className="text-purple-600 hover:underline"
              >
                contact support
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
