import { Character } from "../character/Character";
import { Dialog } from "../dialog/Dialog";
import { Range } from "../info/Dates";
import { Info } from "../info/Info";
import { List } from "../info/Items";
import { Title } from "../info/Title";
import "./instructionsDialog.css";

export const InstructionsDialog = ({ onClose }: { onClose: () => void }) => (
  <Dialog
    title="Welcome to My Interactive CV!"
    closeButtonLabel="Start Exploring"
    component={
      <div className="instructions">
        <Info>
          <div>
            <Title subtitle="Here's how to navigate:" />
            <Range
              start="Arrow keys ←(LEFT) →(RIGHT) ↑(JUMP)"
              end="A(LEFT) D(RIGHT) W(JUMP) (you can try it below)"
              separator="or"
            />
          </div>

          <p>
            This CV will take you through different sections about my skills,
            experience, and more.
          </p>
          <List
            items={[
              "Your goal is to hit the brick blocks to open different sections of the CV. Simply move the character to a brick and press the W or ↑ key to interact with it.",
              "Once all sections are unlocked, you will reach the finish flag!",
            ]}
          />

          <div className="character-wrapper">
            <Character
              sections={[]}
              areSectionsCleared={false}
              onFinish={() => {}}
              onHitSection={() => {}}
            />
          </div>
        </Info>
      </div>
    }
    onClose={onClose}
  />
);
