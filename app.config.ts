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
        base: 'w-6 h-6'
      },
      size: 'text-lg'
    },
    button: {
      icon: {
        size: {
          "xl": 'h-7 w-7'
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
  }
  },
})
