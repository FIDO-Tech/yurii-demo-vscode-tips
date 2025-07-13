/*
 *
 * For Mac users:
 *
 * - Replace "Ctrl" with "Command"
 * - Replace "Alt" with "Option"
 *
 */

/*
 *
 * ❗ Multi-cursor is the most used feature in modern editors.
 *
 */

/*
 * Alt + click (add or remove a line)
 *
 * 👆 Personal usage intensity: 10/10 🟩 (a lot, daily)
 *
 */

const mockProject = {
  id: '1',
  name: 'Project 1',
};

const mockProject2 = {
  id: '2',
  name: 'Project 2',
};

const mockProject3 = {
  id: '3',
  name: 'Project 3',
};

/*
 * Ctrl (command) + d (rename variable)
 *
 * 👆 Personal usage intensity: 12/10 🟩 (a lot, daily)
 *
 */

const [mutate, { data: myMutateResult }] = useUpdateProjectMutation();

const handleUpdate = () => {
  mutate({
    variables: {
      id: project.id,
      input: {
        name: 'New Name',
      },
    },
  });
};

console.log({ mutate, myMutateResult });

/*
 * Command palette (Ctrl + Shift + P) - "action per multi-cursor": example of transform rem to px or vice versa
 *
 * 👆 Personal usage intensity: 6/10 🟧 (often comes in handy, mostly with Commands like "To Uppercase", "Sort lines")
 *
 */

const styles = styled.div`
  width: 1600px;
  height: 1600px;
  border-radius: 8px;
  font-size: 16px;
`;

/*
 * Navigation (home, end) & Commands like "To Uppercase", "Sort lines" / Extension actions
 *
 * 👆 Personal usage intensity: 9/10 🟩 (daily)
 *
 * Shift + Alt + Click (add multi cursor across selection )
 *
 * 👆 Personal usage intensity: 8/10 🟩 (very often)
 *
 */

const translationEn = {
  'VIEW_PROJECTS.ACTION.APPROVE': 'Approve',
  'VIEW_PROJECTS.ACTION.ARCHIVE': 'Archive',
  'VIEW_PROJECTS.ACTION.DECLINE': 'Decline',
  'VIEW_PROJECTS.ACTION.DELETE': 'Delete',
  'VIEW_PROJECTS.ACTION.EDIT': 'Edit',
  'VIEW_PROJECTS.ACTION.REJECT': 'Reject',
  'VIEW_PROJECTS.ACTION.VIEW_REJECTION_NOTES': 'View Rejection Notes',
  'VIEW_PROJECTS.ACTION.VIEW': 'View',
  'VIEW_PROJECTS.BUTTON.ADD': 'Add Project',
  'VIEW_PROJECTS.DIALOG.APPROVE.CANCEL': 'Disregard',
  'VIEW_PROJECTS.DIALOG.APPROVE.CONFIRM': 'Approve',
  'VIEW_PROJECTS.DIALOG.ARCHIVE.CANCEL': 'Disregard',
  'VIEW_PROJECTS.DIALOG.ARCHIVE.CONFIRM': 'Confirm',
};

const translationFr = {
  'VIEW_PROJECTS.ACTION.APPROVE': 'Approuver',
  'VIEW_PROJECTS.ACTION.ARCHIVE': 'Archiver',
  'VIEW_PROJECTS.ACTION.DECLINE': 'Refuser',
  'VIEW_PROJECTS.ACTION.DELETE': 'Supprimer',
  'VIEW_PROJECTS.ACTION.EDIT': 'Modifier',
  'VIEW_PROJECTS.ACTION.REJECT': 'Rejeter',
  'VIEW_PROJECTS.ACTION.VIEW_REJECTION_NOTES': 'Voir les notes de rejet',
  'VIEW_PROJECTS.ACTION.VIEW': 'Voir',
  'VIEW_PROJECTS.BUTTON.ADD': 'Ajouter un projet',
  'VIEW_PROJECTS.DIALOG.APPROVE.CANCEL': 'Ignorer',
  'VIEW_PROJECTS.DIALOG.APPROVE.CONFIRM': 'Approuver',
  'VIEW_PROJECTS.DIALOG.ARCHIVE.CANCEL': 'Ignorer',
  'VIEW_PROJECTS.DIALOG.ARCHIVE.CONFIRM': 'Confirmer',
};
