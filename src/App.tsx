/**
 * Imports components
 */
import { GameProvider } from "./hooks";
import { GameController } from "./components/GameController";

/**
 * Displays the component
 */
export const App: React.FC = () => {
  return (
    <GameProvider>
      <GameController />
    </GameProvider>
  );
};
