'use client'
import React, { useState } from 'react';
import Layout from '../../../components/Layout';

import { Listbox, ListboxItem, ListboxSection, cn } from "@nextui-org/react";
import { ListboxWrapper } from "../../../components/ListBox/ListboxWrapper";
import { AddNoteIcon } from "../../../components/ListBox/AddNoteIcon.jsx";
import { CopyDocumentIcon } from "../../../components/ListBox/CopyDocumentIcon.jsx";
import { EditDocumentIcon } from "../../../components/ListBox/EditDocumentIcon.jsx";
import { DeleteDocumentIcon } from "../../../components/ListBox/DeleteDocumentIcon.jsx";
import { Button } from "@nextui-org/react";



const CurriculumScreen = () => {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const [isWeekOneOpen, setWeekOneOpen] = useState(false);

  const toggleWeekOne = () => {
    setWeekOneOpen(!isWeekOneOpen);
  };

  return (
    <Layout>
      <ListboxWrapper>
        <div className="flex flex-col space-y-4">
          <Listbox variant="faded" aria-label="Listbox menu with sections" className=''>
        <ListboxSection title="Week 1" className='text-black'>
          <ListboxItem
            key="new"
            description="Create a new file"
            startContent={<AddNoteIcon className={iconClasses} />}
          >
            New file
          </ListboxItem>
          <ListboxItem
            key="copy"
            description="Copy the file link"
            startContent={<CopyDocumentIcon className={iconClasses} />}
          >
            Copy link
          </ListboxItem>
          <ListboxItem
            key="edit"
            description="Allows you to edit the file"
            startContent={<EditDocumentIcon className={iconClasses} />}
          >
            Edit file
          </ListboxItem>
        </ListboxSection>
        <ListboxSection title="Week 3">
          <ListboxItem
            key="delete"
            //className="text-danger"
            description="Permanently delete the file"
            startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
          >
            Delete file
          </ListboxItem>
        </ListboxSection>
          </Listbox>
          <Listbox ariant="faded" aria-label="Listbox menu with sections" className=''>
        <ListboxSection title="Week 2" className=''>
          <ListboxItem
            key="new"
            description="Create a new file"
            startContent={<AddNoteIcon className={iconClasses} />}
          >
            New file
          </ListboxItem>
          <ListboxItem
            key="copy"
            description="Copy the file link"
            startContent={<CopyDocumentIcon className={iconClasses} />}
          >
            Copy link
          </ListboxItem>
          <ListboxItem
            key="edit"
            description="Allows you to edit the file"
            startContent={<EditDocumentIcon className={iconClasses} />}
          >
            Edit file
          </ListboxItem>
        </ListboxSection>
        <ListboxSection title="Week 4">
          <ListboxItem
            key="delete"
            //className="text-danger"
            description="Permanently delete the file"
            startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
          >
            Delete file
          </ListboxItem>
        </ListboxSection>
          </Listbox>
        </div>
      </ListboxWrapper>
    </Layout>
  );
};

export default CurriculumScreen;
