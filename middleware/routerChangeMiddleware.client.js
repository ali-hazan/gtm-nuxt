export default function (context) {
    const { from, route } = context
    console.log("Hello")
    console.log('Route changed:', from.fullPath, '->', route.fullPath)
  }
  