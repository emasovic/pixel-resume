import { useCallback, useMemo, useState } from "react";
import { Character } from "./components/character/Character";
import { Dialog } from "./components/dialog/Dialog";
import { Sections } from "./components/sections/Sections";
import { sections } from "./components/sections/sections.default";
import { Section } from "./components/sections/section/section.model";
import { FinishFlag } from "./components/finish-flag/FinishFlag";
import { InstructionsDialog } from "./components/instructions-dialog/InstructionsDialog";
import { FinishDialog } from "./components/finish-dialog/FinishDialog";
import { useWarning } from "./components/warning-dialog/hooks/useWarning";
import { WarningDialog } from "./components/warning-dialog/WarningDialog";
import "./app.css";

const App = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [hitSections, setHitSections] = useState<string[]>([]);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isFinishDialogOpened, setIsFinishDialogOpened] =
    useState<boolean>(false);

  const { isWarningVisible } = useWarning();

  const handleRestart = useCallback(() => {
    setHitSections([]);
    setIsFinishDialogOpened(false);
  }, []);

  const openDialog = useCallback(
    (section: Section) => setSelectedSection(section),
    []
  );

  const closeDialog = useCallback(() => setSelectedSection(null), []);

  const handleSectionHit = useCallback(
    (sectionId: string) =>
      setHitSections((prevState) =>
        Array.from(new Set([...prevState, sectionId]))
      ),
    []
  );

  const handleFinish = useCallback(() => {
    if (!isFinishDialogOpened) {
      setIsFinishDialogOpened(true);
    }
  }, [isFinishDialogOpened]);

  const areSectionsCleared = hitSections.length === sections.length;
  const shouldShowInstructions = !isWarningVisible && showInstructions;
  const filteredSections = useMemo(
    () => sections.filter((section) => !hitSections.includes(section.id)),
    [hitSections]
  );

  return (
    <div className="app">
      <div className="browser-tab">
        {!shouldShowInstructions ? (
          <Character
            sections={filteredSections}
            onHitSection={openDialog}
            onFinish={handleFinish}
            areSectionsCleared={areSectionsCleared}
          />
        ) : null}

        {isWarningVisible ? <WarningDialog /> : null}

        <Sections
          onSectionHit={handleSectionHit}
          onSectionClick={openDialog}
          sections={filteredSections}
          selectedSection={selectedSection}
        />

        {areSectionsCleared ? <FinishFlag /> : null}

        {isFinishDialogOpened ? <FinishDialog onClose={handleRestart} /> : null}

        {shouldShowInstructions ? (
          <InstructionsDialog onClose={() => setShowInstructions(false)} />
        ) : null}

        {selectedSection ? (
          <Dialog
            title={selectedSection.title}
            component={selectedSection.component}
            onClose={closeDialog}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
