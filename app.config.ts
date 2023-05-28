export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'zinc',
    container: {
      padding: 'px-4  lg:px-8'
    },
    verticalNavigation: {
      "active": "text-gray-900 dark:text-white",
      icon: {
        base: 'w-6 h-6 mr-2'
      },
      size: 'text-md'
    },
    button: {
      icon: {
        size: {
          "xl": 'h-6 w-6'
        }
      },
      color: {
        gray: {
          ghost:"text-gray-900 dark:text-white hover:bg-transparent focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
        }
      },
      variant: {
        ghost: "p-8 text-{color}-500 dark:text-{color}-400 hover:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    }
  },
  
  slideover: {
    "wrapper": "fixed inset-0 flex z-50",
    "overlay": {
      "base": "fixed inset-0 transition-opacity",
      "background": "bg-gray-200/75 dark:bg-gray-800/75",
      "transition": {
        "enter": "ease-in-out duration-200",
        "enterFrom": "opacity-0",
        "enterTo": "opacity-100",
        "leave": "ease-in-out duration-200",
        "leaveFrom": "opacity-100",
        "leaveTo": "opacity-0"
      }
    },
    "base": "relative flex-1 flex flex-col w-full focus:outline-none",
    "background": "bg-white dark:bg-gray-900",
    "ring": "",
    "rounded": "",
    "padding": "",
    "shadow": "shadow-xl",
    "width": "w-screen max-w-md",
    "transition": {
      "enter": "transform transition ease-in-out duration-100",
      "leave": "transform transition ease-in-out duration-100"
    }
  }
  
  },
})
