import { DriveStep } from 'driver.js'

export const tourTaskBoard: DriveStep[] = [
  {
    element: '#dark-mode-switcher',
    popover: {
      title: 'Dark Mode Switcher',
      description: 'Use this switch to toggle between dark and light mode for a comfortable viewing experience.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    element: '#column-backlog',
    popover: {
      title: 'Backlog Column',
      description: 'This is the Backlog column where you can add tasks that are yet to be started.',
      side: 'right',
      align: 'start'
    }
  },
  {
    element: '#column-ongoing',
    popover: {
      title: 'Ongoing Column',
      description: 'The Ongoing column is where you track tasks currently in progress.',
      side: 'bottom',
      align: 'start'
    }
  },
  {
    element: '#column-done',
    popover: {
      title: 'Done Column',
      description: 'The Done column is for tasks that have been completed successfully.',
      side: 'bottom',
      align: 'start'
    }
  },
  {
    element: '#create-task-button',
    popover: {
      title: 'Create Task Button',
      description: 'Click here to create a new task and add it to the backlog.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    element: '#task-card-options',
    popover: {
      title: 'Task Card Options',
      description: 'Each task card has a three dots icon for editing and deleting the task.',
      side: 'top',
      align: 'center'
    }
  },
  {
    element: '#draggable-card',
    popover: {
      title: 'Drag and Drop',
      description: 'You can drag and drop task cards to change their status between columns.',
      side: 'bottom',
      align: 'center'
    }
  },
  {
    popover: {
      title: "You're Ready to Get Started!",
      description:
        "Congratulations! You've now been introduced to all the awesome features of our Task board. Happy works!",
      side: 'top',
      align: 'center'
    }
  }
]
