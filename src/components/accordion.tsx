import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
  export function AccordionBlock() {
    const FAQs = [
      {
        "number": "Item-1",
        "question": "What is cryptocurrency?",
        "answer": "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security. It operates on technology called blockchain, which is a decentralized ledger managed by a network of computers (nodes). Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies are typically decentralized and rely on a peer-to-peer network"
      },
      {
        "number": "Item-2",
        "question": "How does cryptocurrency work?",
        "answer": "Cryptocurrencies work through a technology called blockchain. A blockchain is a distributed ledger that records all transactions across a network of computers. When a transaction is made, it is verified by network participants (miners or validators) and then added to a block. Once the block is full, it is added to the chain of previous blocks, creating a secure and transparent history of transactions."
      },
      {
        "number": "Item-3",
        "question": "What is blockchain technology?",
        "answer": "Blockchain technology is a decentralized digital ledger that records transactions across multiple computers so that the record cannot be altered retroactively. Each block in the chain contains a list of transactions, and each block is linked to the previous one, forming a chain. This ensures the integrity and security of the data."
      },
      {
        "number": "Item-4",
        "question": "What is a cryptocurrency wallet?",
        "answer": "A cryptocurrency wallet is a digital tool that allows you to store, manage, and transact with your cryptocurrencies. Wallets can be hardware-based (physical devices) or software-based (apps or online services). Hardware wallets offer higher security by storing your private keys offline, while software wallets are more convenient but can be more vulnerable to hacks."
      },
      {
        "number": "Item-5",
        "question": "Are cryptocurrencies safe to invest in?",
        "answer": "Investing in cryptocurrencies involves risks. While some investors have seen significant returns, the market is highly volatile, and prices can fluctuate dramatically. Risks include regulatory changes, market manipulation, security vulnerabilities, and loss of funds. It is important to research thoroughly, understand the risks, and consider your risk tolerance before investing."
      },
      {
        "number": "Item-6",
        "question": "What is mining in cryptocurrency?",
        "answer": "Mining is the process by which new cryptocurrency transactions are added to the blockchain and new coins are created. It involves solving complex mathematical problems using computational power. Miners who solve these problems are rewarded with newly created cryptocurrency. Mining is a crucial part of maintaining the security and integrity of the blockchain."
      },
    ]

    const renderFAQs = FAQs.map(item => {
      return <AccordionItem value={`Item-${item.number}`}>
      <AccordionTrigger>{item.question}</AccordionTrigger>
      <AccordionContent> {item.answer} </AccordionContent>
    </AccordionItem>
    })
    return (
      <Accordion type="single" collapsible className="w-full">
        {renderFAQs}
      </Accordion>
    )
  }
  