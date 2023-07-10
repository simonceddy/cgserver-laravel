import DropdownMenu from '../../../components/Forms/DropdownMenu';

const options = [
  { value: 'Sen', label: 'Sen', className: 'font-sans' },
  { value: 'Moon Dance', label: 'Moon Dance', className: '' },
  { value: 'Quintessential', label: 'Quintessential', className: '' },
  { value: 'monospace', label: 'monospace', className: 'font-mono' },
];

/**
 * @typedef {object} props
 * @property {import('@tiptap/react').Editor} editor
 */

/**
 * @param {props} props
 */
function FontSelector({ editor }) {
  console.log(editor.getAttributes('fontFamily'));
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
