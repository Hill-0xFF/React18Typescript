import React, { useRef, ChangeEvent, FormEvent } from 'react';
import colorNames from 'colornames';

type ColorInputProps = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setHexColor: React.Dispatch<React.SetStateAction<string>>;
  isDarkText: boolean;
  setIsDarkText: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmitColor: (evt: FormEvent<HTMLFormElement>) => void;
};

const ColorInput = ({
  color,
  isDarkText,
  setIsDarkText,
  setColor,
  setHexColor,
  handleSubmitColor,
}: ColorInputProps) => {
  // const colorInputRef = useRef<HTMLInputElement | null>()
  const colorInputRef = useRef<HTMLInputElement | HTMLInputElement>(null);

  return (
    <div className="ColorInput">
      <form
        action=""
        className="ColorInput"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmitColor(evt)}
      >
        <label htmlFor="inputColor" className="input__label">
          Color
        </label>
        <input
          ref={colorInputRef}
          id="inputColor"
          value={color}
          type="text"
          className="input__field"
          placeholder="Add Color Name Here"
          onChange={(evt: ChangeEvent<HTMLInputElement>) => {
            setColor(evt.currentTarget.value);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setHexColor(colorNames(evt.currentTarget!.value)!);
          }}
          required
        />
        <button type='button' className='input__button' onClick={() => setIsDarkText(!isDarkText)}>Set</button>
      </form>
    </div>
  );
};

export default ColorInput;

/* 
[{
	"resource": "/home/dvorak/projekts/DaveGray/ReaktTutorial/chap10-projekt/src/components/ColorInput.tsx",
	"owner": "typescript",
	"code": "2322",
	"severity": 8,
	"message": "Type 'MutableRefObject<HTMLInputElement | null | undefined>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'.\n  
  Type 'MutableRefObject<HTMLInputElement | null | undefined>' is not assignable to type 'RefObject<HTMLInputElement>'.\n    
  Types of property 'current' are incompatible.\n      
  Type 'HTMLInputElement | null | undefined' is not assignable to type 'HTMLInputElement | null'.\n        
  Type 'undefined' is not assignable to type 'HTMLInputElement | null'.",
	"source": "ts",
	"startLineNumber": 20,
	"startColumn": 9,
	"endLineNumber": 20,
	"endColumn": 12,
	"relatedInformation": [
		{
			"startLineNumber": 122,
			"startColumn": 9,
			"endLineNumber": 122,
			"endColumn": 12,
			"message": "The expected type comes from property 'ref' which is declared here on type 'DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>'",
			"resource": "/home/dvorak/projekts/DaveGray/ReaktTutorial/chap10-projekt/node_modules/@types/react/ts5.0/index.d.ts"
		}
	]
}]
*/
