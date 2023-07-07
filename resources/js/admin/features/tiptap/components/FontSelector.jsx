import DropdownMenu from './DropdownMenu';

const options = [
  { value: 'Sen', label: 'Sen' },
  { value: 'Moon Dance', label: 'Moon Dance' },
  { value: 'Quintessential', label: 'Quintessential' },
  { value: 'monospace', label: 'monospace' },
];

/**
 * @typedef {object} props
 * @property {import('@tiptap/react').Editor} editor
 */

/**
 * @param {props} props
 */
function FontSelector({ editor }) {
  return (
    <div>
      <DropdownMenu
        value={editor.isActive('heading') ? editor.getAttributes('heading').level : 0}
        onChange={(e) => {
          editor.chain().focus().setFontFamily(e.target.value).run();
        }}
        options={options}
      />
    </div>
  );
}

export default FontSelector;
