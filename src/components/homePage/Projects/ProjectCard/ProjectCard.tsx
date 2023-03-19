import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { useState } from "react";
import { Dialog, Modal } from "@mui/material";

type Props = {
  title: string;
  subheading: string;

  imageUrl: any;
  imageAlt: any;

  renderDialogContent: () => JSX.Element;
};

export default function ProjectCard({
  title,

  subheading,
  imageUrl,
  imageAlt,

  renderDialogContent,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleProjectCardClick = () => {
    setOpen(true);
  };
  return (
    <>
      <div onClick={handleProjectCardClick} className={styles.projectCard}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={imageUrl}
            alt={imageAlt!}
            fill={true}
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subheading}>{subheading}</h4>
        </div>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        {renderDialogContent()}
      </Dialog>
    </>
  );
}
