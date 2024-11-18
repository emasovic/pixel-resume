import { Dialog } from "../dialog/Dialog";
import { Info } from "../info/Info";
import { Title } from "../info/Title";
import smallPrize from "../../assets/pizza-gif.webp";
import "./finishDialog.css";

export const FinishDialog = ({ onClose }: { onClose: () => void }) => (
  <Dialog
    title="Well Done, Hero! Your quest is complete!"
    closeButtonLabel="Restart"
    component={
      <div className="contact-info">
        <Info>
          <Title subtitle="Here is a small prize for you!" />

          <img src={smallPrize} alt="Small prize" width={300} height={300} />

          <div>
            <p>
              Feel free to reach out to me for any inquiries or opportunities:
            </p>
            <a
              href="https://www.linkedin.com/in/elvis-masovic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-btn">LinkedIn</button>
            </a>
            <a href="mailto:elvis.masovic@example.com">
              <button className="contact-btn">Email</button>
            </a>
          </div>
        </Info>
      </div>
    }
    onClose={onClose}
  />
);
