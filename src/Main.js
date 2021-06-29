import React from "react";
import MainProbs from "./MainProbs";
import Mains from './data/Mains.json';
import MainProbs2 from "./MainProbs2";


function Main() {
    return (
        <div >
            <div style={{ backgroundImage: 'linear-gradient(to  left, rgba(107,101,235,1), rgba(177,128,246,1))', height: '400px', marginBottom: '250px' }}>
                <main className='container'>
                    <div>
                        <h1 style={{ marginTop: '30px' }} className="bold">استأجر اللي تحتاجه، وأجَّر اللي ماتحتاجه</h1>
                        <p style={{ marginTop: '-10px' }}>من خلال تطبيق مردود تقدر تأجر أي شي وتقدر تستأجر أي شي محتاجه</p>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginTop: '40px'
                        }}>
                            <img src={'./googleplay.png'} width='150px' />
                            <img src={'./appstore.png'} width='150px' />
                        </div>
                    </div>

                    <div className='hidden'>
                        <img src={'./mockuper.png'}
                            width='400px'
                            style={{ maxWidth: '100%', height: 'auto', float: 'left' }}
                        />
                    </div>
                </main>
            </div>

            <div className='container'>
                <div className='adv'>
                    {
                        Mains.mainAdv.map((result) => (
                            <MainProbs
                                img={result.img}
                                title={result.title}
                                para={result.para}
                            />
                        ))
                    }
                </div>
                
                {/* {
                        Mains.mainAdv.map((result) => (
                            <MainProbs2
                            class='adv2r'
                                img={result.img}
                                title={result.title}
                                para={result.para}
                            />
                        ))
                    }
                <MainProbs2/> */}
                <div className='adv2r'>
                    <div>
                        <img src='./mainsvg.svg' className='advimg' />
                    </div>
                    <div className='adb2rm'>
                        <h2>طلع فلوس بدون رأس المال</h2>
                        <p style={{lineHeight: '2'}}>بصفتك عضوًا في مردود ، تقدر تحصل على  متجر مخصص لعرض جميع منتجاتك في تطبيقنا ، وبناء علامتك التجارية الخاصة ، ومشاهدة أرباحك تزيد.وشوف شعور ربح المال مع مردود.</p>
                    </div>
                </div>

                <div className='adv2l'>
                    <div>
                        <img src='./mainsvg.svg' className='advimg' />
                    </div>
                    <div className='adb2lm'>
                        <h2>مرونة بالتعامل</h2>
                        <p style={{lineHeight: '2'}}>تقدر انت كمالك للمنتج تشوف تقييم المستأجر قبل تتحدد قبول طلبه او رفضه. او كامستأجر تقدر تشوف تقييم المالك قبل لا تحجز اي منتج و تشوف أراء العملاء السابقين. وتقدرون كمالك ومستأجر التواصل عن ط</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
