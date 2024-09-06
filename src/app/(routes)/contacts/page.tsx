import SociaLinks from '@/components/social-links';

export default function ContactsPage() {
  return (
    <article className='lg:w-2/3 m-auto mt-10 space-y-4 min-h-screen'>
        <h1 className='font-bold text-2xl text-center'>Contacts</h1>
        <div className="flex items-center lg:justify-evenly flex-col lg:flex-row gap-4 lg:gap-0">
          <p className='text-lg font-medium max-w-[300px] text-center'>Here are our media platforms where you can contact us:</p>
          <SociaLinks />
        </div>
        <p className='text-main_secondary text-xs mt-8'>All the provided text is just plain words to imitate some real web apps and we do not provide anything that is mentioned here. Thanks</p>
    </article>
  )
}
