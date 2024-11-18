import { Dialog } from "../dialog/Dialog";
import { Info } from "../info/Info";
import { Title } from "../info/Title";

export const WarningDialog = () => (
  <Dialog
    title=""
    component={
      <Info>
        <Title
          title="To fully experience this CV, please make sure your screen is 1366px or higher!"
          subtitle="Your experience may be limited on smaller screens. For the best viewing, we recommend using a larger screen."
        />
      </Info>
    }
  />
);
