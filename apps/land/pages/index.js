import { BaseButton } from '@reusejs/react-buttons';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="bg-blue-50 p-4">Welcome to land!</h1>

      <div className="my-2">
        <BaseButton
          onClick={() => {
            alert('Clicked BaseButton');
          }}
        >
          I am a button
        </BaseButton>
      </div>

      <div className="divide-y-2 divide-red-500 hover:divide-blue-900">
        <div className="bg-blue-50 my-2 pl-3">1</div>
        <div className="bg-blue-50 my-2 pl-3">2</div>
        <div className="bg-blue-50 my-2 pl-3">3</div>
        <div className="bg-blue-50 my-2 pl-3">4</div>
      </div>
    </div>
  );
}
export default Index;
