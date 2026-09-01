import { useEffect, useState } from 'react'

const DateTime = () => {
  const [date, setDate] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 60000)

    return () => clearInterval(interval)
  }, [])

  const weekdays = ['Sund', 'Mond', 'Tues', 'Wedn', 'Thur', 'Frid', 'Satu']
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const hours = date.getHours() % 12 || 12
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const period = date.getHours() >= 12 ? 'PM' : 'AM'

  return (
    <div>
      {`${weekdays[date.getDay()]} ${months[date.getMonth()]}${date.getDate()} ${hours}:${minutes}${period}`}
    </div>
  )
}

export default DateTime
