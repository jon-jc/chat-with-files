import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { FileIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Upload = () => {
  return (
    <div>
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div>Upload PDF</div>
          <p className="text-sm leading-none mt-1 text-gray-500 dark:text-gray-400">
            Select a PDF file to analyze using our AI tools.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 border-dashed dark:border-gray-800">
              <FileIcon className="w-6 h-6 text-gray-400 dark:text-gray-600" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="file">File</Label>
              <div className="text-sm leading-none">pdf-sample.pdf</div>
              <Button as="label" htmlFor="file" size="sm" variant="outline">
                Change
              </Button>
              <Input className="hidden" id="file" type="file" />
            </div>
          </div>
          <div className="border-dashed border-2 border-gray-200 rounded-lg w-full h-[150px] flex items-center justify-center gap-2 text-center text-sm border-gray-200 dark:border-gray-800">
            <FileIcon className="w-4 h-4 text-gray-400 dark:text-gray-600" />
            <span className="text-gray-500 dark:text-gray-400">
              Drag and drop your file here or
            </span>
            <Button size="sm" variant="outline">
              Browse
            </Button>
          </div>
          <Button size="sm">Analyze</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Upload;
