import React from "react";
import PolicyList from "./PolicyList";
import policy from "./data/policy.json"
import PolicyListTerms from "./PolicyListTerms";
import PolicyTable from "./PolicyTable";
import PolicyNormal from "./PolicyNormal";
import { ExternalLink } from 'react-external-link';

function Policy() {
    return (
        <div className='container' style={{ margin: '50px auto' }}>
            <h2>الشروط والأحكام</h2>
            <p>  
            يرجى الضغط على الرابط للحصول على النسخة المحدثة للشروط والأحكام.   
            <ExternalLink href="https://drive.google.com/file/d/1z-rJlmhmOZF75IAUFa8en2siTQdFL_V-/view?usp=sharing" >انقر للحصول على النسخة المحدثة 
        </ExternalLink>     
            
            </p>
            <p>تمثل جميع الشروط والاحكام والسياسات التي تم نشرها على منصة مردود "عقد رسمي" بين منصة مردود والعملاء المستخدمين و ُوضعت لحماية وحفظ حقوق كل من:</p>
            <ol>
                <li>منصة مردود: وهي منصة تسمح للفرد بعرض ممتلكاته وتأجيرها على المستفيدين لمدة محددة وبسعر يتم اختياره مسبقاً من قبل المالك. حيث يقوم مردود بتوفير جميع وسائل  الدفع الآمن والتحقق من إتمام العملية بنجاح منذ عرضها في مردود حتى حين انتهاء فترة التأجير وعودتها إلى المالك مرة أخرى بحالة ممتازة.</li>
                <li>المستخدم: العميل أو المستفيد الذي يصل إلى الموقع بتسجيل.</li>
            </ol>
            <p>إن أي استخدام من قبلك للخدمات التي توفرها منصة مردود يشكل موافقة منك على هذا العقد وأحكامه، وتبعاً لذلك يجب عليك عدم استخدام المنصة في حال لم تكن موافقاً على الأحكام والشروط الواردة في هذا العقد. كما أن لدى منصة مردود كامل الحق في تحديث أو تغير أي من هذه الأحكام والشروط دون إخطار مسبق، يكون من مسؤوليتك كمستخدم للمنصة مراجعة ضوابط وشروط الاستخدام بشكل دوري لمعرفة التحديثات التي تطرأ على الأحكام والشروط. تم إنشاء الشروط والأحكام بنا ًء نظام التعاملات الإلكترونية المعمول بها في المملكة العربية السعودية</p>
            {
                policy.policy.map((result) => (
                    <PolicyList
                        heading={result.heading}
                        subheading={result.subheading}
                        list={
                            result.list.map((result) => (
                                <ol>
                                    <li>{result.one}</li>
                                    <li>{result.two}</li>
                                    <li>{result.three}</li>
                                    <li>{result.four}</li>
                                    <li>{result.five}</li>
                                    <li>{result.six}</li>
                                </ol>
                            ))
                        }
                    />
                ))
            }
            {
                policy.policyterms.map((result) => (
                    <PolicyListTerms
                        heading={result.heading}
                        term={result.term}
                        list={
                            result.list.map((result) => (
                                <ol>
                                    <li>{result.one}</li>
                                    <li>{result.two}</li>
                                </ol>
                            ))
                        }
                    />
                ))
            }
            {
                policy.policytable.map((result) => (
                    <PolicyTable
                        heading={result.heading}
                        term={result.term}
                        subheading={result.subheading}
                        // table={
                        //     result.tablehead.map((result) => (
                        //         <tr>
                        //             <th>{result.producthead}</th>
                        //             <th>{result.clarificationhead}</th>
                        //         </tr>
                        //     ))
                        // }
                        table={
                            result.tablebody.map((result) => (
                                <tr>
                                    <td>{result.product}</td>
                                    <td>{result.clarification}</td>
                                </tr>
                            ))
                        }
                    />
                ))
            }
            {
                policy.policynormal.map((result) => (
                    <PolicyNormal
                        heading={result.heading}
                        term={result.term}
                    />
                ))
            }
            



        </div>
    );
}

export default Policy;
