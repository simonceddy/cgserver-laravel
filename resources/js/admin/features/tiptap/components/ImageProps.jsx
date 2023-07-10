import { useState } from 'react';
import Button from '../../../../shared/components/Button';
import Modal from '../../../components/Modal';

const wrapOptions = [
  { label: 'No wrap', value: 0 },
  { label: 'Wrap right', value: 1 },
  { label: 'Wrap left', value: 2 },
];

function ImageProps({
  image, setImage, onClose
}) {
  // console.log(image);
  const [attributes, setAttributes] = useState({
    ...image
  });

  console.log(attributes);
  return (
    <Modal>
      <div
        className="col p-2 rounded-lg fl bg-aqua-spring border-2 border-cornflower-blue z-50"
      >
        <label
          className="row w-full my-2 justify-between items-center"
          htmlFor="img-props-width"
        >
          <span>
            Width:
          </span>
          <input
            className="p-1 rounded-md border border-cornflower-blue font-sans focus:border-pastel-green"
            type="number"
            value={attributes.width || ''}
            min={0}
            id="img-props-width"
            name="img-props-width"
            onChange={(e) => setAttributes({
              ...attributes,
              width: Number(e.target.value)
            })}
          />
          <span>
            px
          </span>
        </label>
        <label
          className="row w-full my-2 justify-between items-center"
          htmlFor="img-props-height"
        >
          <span>
            Height:
          </span>
          <input
            className="p-1 rounded-md border border-cornflower-blue font-sans focus:border-pastel-green"
            type="number"
            value={attributes.height || ''}
            min={0}
            id="img-props-height"
            name="img-props-height"
            onChange={(e) => setAttributes({
              ...attributes,
              height: Number(e.target.value)
            })}
          />
          <span>
            px
          </span>
        </label>
        <label
          className="row w-full my-2 justify-between items-center"
          htmlFor="wrap-input"
        >
          <span>
            Wrap:
          </span>
          <select
            name="wrap-input"
            id="wrap-input"
            value={attributes.float || 0}
            onChange={(e) => {
              setAttributes({ ...attributes, float: Number(e.target.value) });
            }}
          >
            {wrapOptions.map(({ label, value }) => (
              <option key={`wrap-option-${value}`} value={value} label={label} />
            ))}
          </select>
        </label>
        <Button onClick={() => {
          setImage(attributes);
          if (onClose) onClose();
        }}
        >
          OK
        </Button>
        <Button onClick={() => {
          if (onClose) onClose();
        }}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
}

export default ImageProps;
