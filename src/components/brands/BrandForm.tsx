import React, { useState } from 'react';
import { BrandFormData } from '../../types/brand';
import { FileUpload } from '../ui/FileUpload';

interface BrandFormProps {
  initialData?: BrandFormData;
  onSubmit: (data: BrandFormData) => void;
  onCancel: () => void;
}

export function BrandForm({ initialData, onSubmit, onCancel }: BrandFormProps) {
  const [formData, setFormData] = useState<BrandFormData>(
    initialData || {
      name: '',
      description: '',
      imageUrl: '',
    }
  );

  const handleFileSelect = (file: File) => {
    // In a real application, you would upload this file to a server
    // and get back a URL. For now, we'll create a local URL
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, imageUrl });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div>
          <FileUpload
            onFileSelect={handleFileSelect}
            preview={formData.imageUrl}
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Brand Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}