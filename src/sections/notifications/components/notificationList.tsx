import React from 'react'
import {notifications} from '@/constants/notifications'
import NotificationCard from './notificationCard'

function NotificationList() {
  return (
    <div className='flex flex-col gap-3'>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>
  )
}

export default NotificationList
