export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">
        Learn & Quiz: Your Personalized Language Trainer
      </h1>
      <p className="text-[16px] mb-3">
        Build your own custom dictionary by adding words and their translations
        in any language you want! Then, test your knowledge with fun and
        interactive quizzes where you guess how each word is translated. Perfect
        for language learners of all levels, this app helps you memorize
        vocabulary faster and makes learning a game.
      </p>
      <p className="text-xl font-bold mb-2">Features:</p>
      <ul className="list-disc list-inside space-y-2 ">
        <li>Create and manage your personal word list</li>
        <li>Add translations in any language pair you choose</li>
        <li>Play quiz games to challenge your memory</li>
        <li>Track your progress and improve over time</li>
        <li>Simple, intuitive interface designed for quick learning</li>
      </ul>
    </div>
  );
}
