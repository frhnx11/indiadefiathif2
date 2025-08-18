import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingBot from '@/components/FloatingBot';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Share2, BookOpen, ChevronRight } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Blog content based on the three files
  const blogPosts: Record<string, any> = {
    'what-is-defi': {
      title: 'What is DeFi?',
      subtitle: 'Decentralized Finance: The Human Story Behind Digital Revolution',
      author: 'India DeFi Alliance',
      date: 'August 18, 2025',
      readTime: '8 min read',
      category: 'Education',
      content: [
        {
          type: 'intro',
          text: "Imagine a world, where sending money to your family overseas doesn't require days of waiting and hefty bank fees. Picture being able to earn interest on your savings, without needing a minimum balance or credit approval. This isn't a distant dream—it's the reality that Decentralized Finance, (DeFi), is creating today. At its core, DeFi represents one of the most profound shifts in how humans interact with financial systems since the invention of money!!"
        },
        {
          type: 'heading',
          text: 'What is Decentralized Finance?'
        },
        {
          type: 'paragraph',
          text: "DeFi, is a financial ecosystem built on blockchain technology that operates without traditional intermediaries like banks, brokers, or exchanges. Think of it as the financial system reimagined for the digital age—one where smart contracts, which are self-executing programs on the blockchain, replace the need for human middlemen in financial transactions."
        },
        {
          type: 'paragraph',
          text: "At its essence, DeFi takes the basic premise of Bitcoin—digital money—and expands it into a complete digital alternative to the existing financial systems, but without the associated costs of banks, escrows, clearing houses, office towers or trading floors . It operates 24/7, globally offering peer-to-peer financial services that are pseudonymous, open to all, and built on transparent, immutable blockchain networks."
        },
        {
          type: 'paragraph',
          text: "The foundation of DeFi rests on three key technologies. First, blockchain networks serve as the settlement layer where transactions are recorded and verified. Second, smart contracts automate financial agreements and eliminate the need for trusted third parties. Third, various digital assets including cryptocurrencies, stablecoins, and tokenized real-world assets provide the means of exchange and store of value within the ecosystem."
        },
        {
          type: 'section',
          title: 'How DeFi Transforms Financial Services'
        },
        {
          type: 'subheading',
          text: 'Breaking Down Traditional Barriers'
        },
        {
          type: 'paragraph',
          text: 'Traditional finance has long been characterized by geographical restrictions, credit requirements, and complex documentation that actively excludes millions (often the most vulnerable) from basic financial services. DeFi fundamentally changes this by offering what experts call "permissionless" access—anyone with an internet connection can participate without needing approval from a central authority.'
        },
        {
          type: 'paragraph',
          text: "Consider Mamta, a small business owner in rural Madhya Pradesh. In the traditional system, accessing business loans would require traveling to the nearest bank branch, providing extensive documentation, and waiting weeks for approval—if approved at all, making the whole process extremely cumbersome for Mamtha. With DeFi, Mamtha can access lending protocols directly from her smartphone, collateralize her digital assets, and receive funds - within minutes."
        },
        {
          type: 'subheading',
          text: 'The Power of Smart Contracts'
        },
        {
          type: 'paragraph',
          text: "Smart contracts are the backbone of DeFi, functioning as digital agreements that automatically execute when predetermined conditions are met. These self-executing contracts ensure that financial arrangements operate exactly as programmed, without human interference or manipulation."
        },
        {
          type: 'paragraph',
          text: "In practical terms, this means that when you lend money through a DeFi protocol like Aave or Compound, smart contracts automatically manage interest calculations, distribute payments, and handle collateral—all without requiring a bank loan officer or complex approval process. The transparency of blockchain technology allows anyone to verify these operations, building trust through code rather than institutional reputation."
        },
        {
          type: 'subheading',
          text: 'Financial Inclusion'
        },
        {
          type: 'paragraph',
          text: "Stories from developing countries illustrate this impact powerfully. In regions where banking infrastructure is scarce, people are increasingly turning to DeFi platforms for basic financial services. In 2023, over 32% of financial transactions in certain African nations were conducted through DeFi platforms."
        },
        {
          type: 'subheading',
          text: 'Transparency and Control'
        },
        {
          type: 'paragraph',
          text: "Traditional banking operates as a black box—customers deposit money and trust banks to manage it responsibly, but have limited visibility into how their funds are used. DeFi operates on public blockchains where every transaction is recorded and verifiable. Users maintain control of their private keys and can withdraw funds at any time without asking permission."
        },
        {
          type: 'subheading',
          text: 'Innovation and Efficiency'
        },
        {
          type: 'paragraph',
          text: 'DeFi\'s composable nature—often called "money legos"—allows developers to build new financial products by combining existing protocols. This has led to innovations like flash loans (uncollateralized loans that must be repaid within a single transaction), yield farming (earning rewards by providing liquidity), and synthetic assets that track real-world prices.'
        },
        {
          type: 'conclusion',
          text: "Decentralized Finance represents more than just technological innovation—it's a reimagining of how financial systems can serve humanity. By eliminating intermediaries, reducing costs, and providing global access to financial services, DeFi has the potential to create a more equitable and inclusive financial system."
        },
        {
          type: 'paragraph',
          text: "Perhaps DeFi's most profound impact lies in its potential for financial inclusion. The World Bank estimates that 1.7 billion adults globally lack access to basic banking services. DeFi requires only an internet connection and a digital wallet, potentially bringing financial services to anyone, anywhere."
        }
      ]
    },
    'how-defi-works': {
      title: 'How DeFi Works',
      subtitle: 'Understanding the Building Blocks',
      author: 'India DeFi Alliance',
      date: 'August 17, 2025',
      readTime: '12 min read',
      category: 'Technical',
      content: [
        {
          type: 'section',
          title: 'Blockchain Technology: The Bedrock of DeFi'
        },
        {
          type: 'paragraph',
          text: "At its very core, DeFi operates on blockchain technology—a decentralized, immutable digital ledger that records all transactions across a network of computers. Unlike traditional banking systems that rely on centralized databases, blockchain operates as a transparent, tamper-proof record of all financial activities. Every transaction is verified by network participants and permanently recorded in blocks that are cryptographically linked together, making the system virtually impenetrable to fraud or manipulation."
        },
        {
          type: 'section',
          title: 'Smart Contracts: The Automated Intermediaries'
        },
        {
          type: 'paragraph',
          text: "Smart contracts are self-executing programs that automatically enforce the terms of agreements written directly into code. These digital contracts replace traditional intermediaries like banks and brokers, executing transactions automatically when predetermined conditions are met. For instance, a smart contract can automatically lend funds to a borrower when they provide adequate collateral, calculate interest, and even liquidate the collateral if loan terms aren't met—all without human intervention."
        },
        {
          type: 'section',
          title: 'Stablecoins: Bridging Volatility and Stability'
        },
        {
          type: 'paragraph',
          text: "To address the inherent volatility of cryptocurrencies, DeFi relies heavily on stablecoins—digital currencies designed to maintain stable value relative to reference assets such as the US Dollar. These coins, such as USDC and USDT, provide stability for transactions and serve as a safe haven during periods of high market volatility."
        },
        {
          type: 'heading',
          text: 'How DeFi Operates: The Ecosystem in Action'
        },
        {
          type: 'section',
          title: 'Decentralized Exchanges (DEXs): Trading Without Intermediaries'
        },
        {
          type: 'paragraph',
          text: "Decentralized exchanges represent one of DeFi's most successful applications, allowing users to trade cryptocurrencies directly from their wallets without centralized authorities. Unlike traditional exchanges that match buyers and sellers through order books, DEXs use Automated Market Makers (AMMs) and liquidity pools to facilitate trades."
        },
        {
          type: 'paragraph',
          text: 'Liquidity pools are smart contracts containing pairs of cryptocurrencies that enable trading. Users known as "liquidity providers" deposit equal values of two tokens into these pools, earning fees from every trade that occurs. For example, a liquidity pool might contain ETH and USDC, allowing users to swap between these tokens instantly while liquidity providers earn a portion of fees. All built into smart contracts.'
        },
        {
          type: 'section',
          title: 'Lending and Borrowing: Credit Without Credit Checks'
        },
        {
          type: 'paragraph',
          text: "DeFi lending platforms like Aave and Compound allow users to lend their digital assets to earn interest or borrow assets by providing collateral. The process is entirely automated through smart contracts, with interest rates determined algorithmically based on supply and demand. Borrowers must typically over-collateralize their loans—depositing assets worth more than the loan amount—to protect lenders from default risk."
        },
        {
          type: 'section',
          title: 'Yield Farming: Maximizing Returns Through Strategy'
        },
        {
          type: 'paragraph',
          text: "Yield farming represents a sophisticated strategy where users maximize returns by providing liquidity to various DeFi protocols. Participants can earn rewards through transaction fees, governance tokens, and incentive programs, often achieving annual percentage yields (APY) ranging from a few percent to triple digits. However, these higher returns come with increased risks, including smart contract vulnerabilities and potential loss."
        },
        {
          type: 'heading',
          text: 'Governance: Democracy in Finance'
        },
        {
          type: 'section',
          title: 'Governance Tokens: Voting Rights in the Digital Age'
        },
        {
          type: 'paragraph',
          text: "Many DeFi protocols issue governance tokens that grant holders voting rights on important decisions affecting the platform's future. Token holders can vote on protocol upgrades, fee structures, treasury allocations, and strategic partnerships effectively democratizing financial decision-making. The voting power typically correlates with the number of tokens held, creating a stake-weighted governance system."
        },
        {
          type: 'section',
          title: 'Decentralized Autonomous Organizations (DAOs)'
        },
        {
          type: 'paragraph',
          text: "Governance tokens enable the formation of Decentralized Autonomous Organizations (DAOs), where community members collectively govern protocols without centralized management. These organizations allow for transparent, on-chain decision-making processes where all votes are recorded on the blockchain, ensuring accountability and preventing manipulation, without the need for a hierarchical structure of centralised decision making."
        },
        {
          type: 'conclusion',
          text: 'The Financial Future is Decentralized'
        },
        {
          type: 'paragraph',
          text: "By leveraging blockchain technology, smart contracts, and community governance, DeFi creates a more inclusive, transparent, and efficient financial system that operates without traditional intermediaries."
        }
      ]
    },
    'defi-vs-cefi': {
      title: 'DeFi vs CeFi',
      subtitle: 'Clash of Two Worlds',
      author: 'India DeFi Alliance',
      date: 'August 16, 2025',
      readTime: '10 min read',
      category: 'Analysis',
      content: [
        {
          type: 'intro',
          text: "The financial world stands at a crossroads between two fundamentally different philosophies: Decentralized Finance (DeFi) and Centralized Finance (CeFi). While traditional banking has served as humanity's financial backbone for centuries, DeFi represents a paradigm shift that challenges the very foundations of how we manage money. Understanding these differences requires looking beyond technical jargon to examine how they impact real people's lives."
        },
        {
          type: 'section',
          title: 'The Fundamental Divide: Control and Access'
        },
        {
          type: 'paragraph',
          text: "The most profound difference lies in who controls your money. In traditional banking, your funds are held by institutions—banks, credit unions, or brokerages—that act as trusted intermediaries. These institutions make decisions about your access, set terms for services, and can freeze or restrict your accounts based on their policies or regulatory requirements."
        },
        {
          type: 'paragraph',
          text: "DeFi flips this model entirely. Built on blockchain technology, DeFi protocols use smart contracts—self-executing code that automatically enforces agreements when conditions are met. This means no single entity controls your funds; instead, transparent algorithms manage transactions, lending, and trading. You hold your private keys, making you the sole custodian of your assets."
        },
        {
          type: 'section',
          title: 'Transparency vs. Trust'
        },
        {
          type: 'paragraph',
          text: "Traditional finance operates on institutional trust. Banks maintain internal ledgers, and customers must trust these institutions to accurately record and manage transactions. While regulatory oversight provides protection—such as deposit insurance up to certain limits—the inner workings remain largely opaque to users."
        },
        {
          type: 'paragraph',
          text: "DeFi champions radical transparency. Every transaction is recorded on public blockchains, creating an immutable, auditable record accessible to anyone. This transparency extends to the underlying code governing these protocols, allowing users to verify exactly how their funds will be managed. However, this openness also means that transaction patterns can be analyzed, potentially compromising financial privacy."
        },
        {
          type: 'section',
          title: 'The Innovation Spectrum: Speed vs. Stability'
        },
        {
          type: 'paragraph',
          text: "Traditional banking prioritizes stability and regulatory compliance. New features undergo extensive testing and regulatory approval, which can take months or years. This conservative approach protects consumers but limits innovation. When you deposit money in a bank, you expect predictable returns and established protections."
        },
        {
          type: 'paragraph',
          text: "DeFi operates at the speed of software development. New protocols and features can be deployed within days, offering innovative financial instruments like yield farming and liquidity mining that can generate significantly higher returns than traditional savings accounts. These strategies involve providing liquidity to decentralized exchanges or lending protocols in exchange for rewards, sometimes offering annual percentage yields exceeding 100%."
        },
        {
          type: 'section',
          title: 'Financial Inclusion: Breaking Down Barriers'
        },
        {
          type: 'paragraph',
          text: "Perhaps DeFi's most compelling promise is financial inclusion. According to the World Bank, approximately 1.4 billion adults globally remain unbanked, often due to lack of documentation, geographical isolation, or minimum balance requirements. Traditional banks, being profit-driven and risk-averse, find serving low-income populations economically unattractive."
        },
        {
          type: 'paragraph',
          text: "DeFi protocols are permissionless by design. Anyone with internet access can participate without providing identification or meeting minimum income requirements. This has profound implications for marginalized communities, including women in developing countries, migrant workers, and rural populations who have historically been excluded from formal financial systems."
        },
        {
          type: 'paragraph',
          text: "Yet this accessibility comes with trade-offs. DeFi's technical complexity creates barriers for less tech-savvy users, and the absence of regulatory protection means users have limited recourse when things go wrong. The volatile nature of cryptocurrencies also poses risks for those seeking stable value storage."
        },
        {
          type: 'section',
          title: 'Risk and Regulation: Two Sides of Protection'
        },
        {
          type: 'paragraph',
          text: "Traditional finance operates within established regulatory frameworks designed to protect consumers and maintain financial stability. Banks undergo regular audits, maintain reserve requirements, and provide deposit insurance. When fraud occurs, established legal mechanisms offer recourse."
        },
        {
          type: 'section',
          title: 'The Human Choice: Convergence or Competition?'
        },
        {
          type: 'paragraph',
          text: "Rather than viewing DeFi and traditional finance as adversaries, the future likely holds hybrid models that combine the best of both worlds. Some DeFi protocols are incorporating compliance features, while traditional institutions are exploring blockchain integration."
        },
        {
          type: 'paragraph',
          text: "For individuals, the choice isn't binary. A small business owner might use traditional banking for payroll and everyday operations while leveraging DeFi for treasury management and higher yields. A retiree might prefer the stability of traditional banking, while a tech entrepreneur embraces DeFi's innovation potential."
        },
        {
          type: 'conclusion',
          text: "The revolution isn't just technological—it's fundamentally about who controls money and how financial power is distributed in society. The choice between DeFi and traditional finance is ultimately a choice about the kind of financial future we want to build together."
        }
      ]
    }
  };

  const post = blogPosts[id || ''];

  if (!post) {
    return (
      <div className="min-h-screen relative">
        <Navigation />
        <main className="relative z-10 pt-20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-2xl mx-auto text-center p-8">
              <CardContent>
                <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
                <Link to="/resources">
                  <Button>Back to Resources</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
        <FloatingBot />
      </div>
    );
  }

  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case 'intro':
        return (
          <div key={index} className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <p className="text-lg leading-relaxed text-gray-900 italic font-semibold">
              {item.text}
            </p>
          </div>
        );
      case 'heading':
        return (
          <h2 key={index} className="text-3xl font-black text-gray-900 mb-6 mt-10">
            {item.text}
          </h2>
        );
      case 'section':
        return (
          <div key={index} className="mt-10 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 mr-4 rounded-full"></div>
              {item.title}
            </h3>
          </div>
        );
      case 'subheading':
        return (
          <h4 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-6">
            {item.text}
          </h4>
        );
      case 'paragraph':
        return (
          <p key={index} className="text-lg leading-[1.8] text-gray-800 mb-5 font-normal">
            {item.text}
          </p>
        );
      case 'conclusion':
        return (
          <div key={index} className="mt-10 p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500">
            <p className="text-lg font-bold text-gray-900">
              {item.text}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative bg-white">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Resources
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-blue-600 font-medium">Blog</span>
              </div>
              
              {/* Category and Read Time */}
              <div className="flex items-center gap-4 mb-6">
                <Badge className={`px-4 py-1.5 text-sm font-medium ${
                  post.category === 'Education' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' :
                  post.category === 'Technical' ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white' :
                  'bg-gradient-to-r from-green-500 to-green-600 text-white'
                } shadow-lg`}>
                  {post.category}
                </Badge>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.readTime}</span>
                </div>
              </div>
              
              {/* Title and Subtitle */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
                {post.title}
              </h1>
              {post.subtitle && (
                <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
                  {post.subtitle}
                </p>
              )}
              
              {/* Author and Date */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-md">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{post.author}</p>
                    <p className="text-sm text-gray-600">{post.date}</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="shadow-sm hover:shadow-md transition-all">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12 lg:p-16">
                <article className="prose prose-lg max-w-none">
                  {post.content.map((item: any, index: number) => renderContent(item, index))}
                </article>
              </div>
              
              {/* Call to Action */}
              <Card className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Join the DeFi Revolution</h3>
                  <p className="mb-6 text-blue-100">
                    Be part of India's journey towards financial innovation and inclusion.
                  </p>
                  <Link to="/membership">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Join India DeFi Alliance
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Continue Reading</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(blogPosts)
                    .filter(([key]) => key !== id)
                    .slice(0, 2)
                    .map(([key, relatedPost]) => (
                      <Card key={key} className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500 pointer-events-none"></div>
                        <CardContent className="p-6 relative z-10">
                          <Badge className={`mb-3 ${
                            relatedPost.category === 'Education' ? 'bg-blue-100 text-blue-700' :
                            relatedPost.category === 'Technical' ? 'bg-purple-100 text-purple-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {relatedPost.category}
                          </Badge>
                          <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4">{relatedPost.subtitle}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>{relatedPost.date}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {relatedPost.readTime}
                            </span>
                          </div>
                          <Link to={`/blog/${key}`}>
                            <Button variant="outline" size="sm" className="w-full">
                              Read Article <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingBot />
    </div>
  );
};

export default BlogPost;