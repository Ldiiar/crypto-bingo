import { AccordionBlock } from '@/components/accordion-block';
import Container from '@/components/container';
import H1 from '@/components/h1';
import TopCryptosBlock from '@/components/top-cryptos-block';
import { Button } from '@/components/ui/button';
import { TextEffect } from '@/components/ux/text-effect';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const slogan = 'Empower your financial future - explore the world of cryptocurrency.'
	const gifSrc = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWltMWlsamFrYXQzd2ppbXlrdHExMm56d3p6em8xcjU3NWFvYTljYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYResEdNIyniuL6/giphy.webp'
	return (
		<main className='flex flex-col items-center mt-6 mb-[100px]'>
      <div className="flex flex-col items-center w-full">
        <Image src={gifSrc} alt='Image' width={200} height={200} className='w-1/2 min-w-[300px] h-48 mb-14 mt-10'/>
        <H1>
          <TextEffect per='word' as='span' preset='slide'>
              {slogan}
          </TextEffect>
        </H1>
        <p className='text-main_secondary mb-[15px] font-semibold'>It&apos;s a free platform</p>
        <Link href='/home'>
          <Button size="lg" variant='destructive'>Let&apos;s get started</Button>
        </Link>
      </div>
      <div className="w-screen bg-main_fourth h-fit my-[150px] py-32">
        <Container>
      <section className="w-full flex flex-col items-center justify-evenly lg:flex-row">
        <div className="flex w-full text-white font-semibold max-w-[500px] leading-relaxed items-center justify-center flex-col mb-12 lg:mb-0">
            <span className='text-orange-500  text-3xl md:text-4xl lg:text-5xl mb-4'>Cryptocurrencies</span>
            <p className='text-xs lg:text-base font-light text-center mb-6'>A comprehensive platform that enables efficient monitoring of popular cryptocurrencies and facilitates seamless data collection, analysis, and visualization.</p>
            <Link href='/home'>
              <Button size='lg' variant='secondary'>See the coins</Button>
            </Link>
        </div>
            <TopCryptosBlock />
    </section>
        </Container>
      </div>
      <section className='w-full gap-2 items-center'>
        <h4 className='text-xl md:text-2xl xl:text-3xl font-bold text-center mb-[20px]'>Frequently Asked Questions</h4>
        <AccordionBlock />
      </section>
		</main>
	);
}
