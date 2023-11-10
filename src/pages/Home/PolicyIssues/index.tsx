import clsx from 'clsx';
import { anchorId } from 'src/config/anchor';
import titlePolicyIssuesSrc from 'src/assets/images/title-policy-issues.svg';
import { issues } from './data';
import Card from './Card';

const PolicyIssues = () => {
  return (
    <section
      id={anchorId.policyIssues}
      className="flex justify-center bg-primary text-white px-[20px] py-[30px] pb-[50px]"
    >
      <div className="container">
        <div className="flex align-center justify-center">
          <img src={titlePolicyIssuesSrc} />
        </div>
        <div
          className={clsx(
            "flex flex-col gap-[20px] mt-[30px] justify-center items-center",
            "lg:flex-row lg:gap-[0px] lg:justify-between lg:items-start"
          )}
        >
          {issues.map((issue, index) => <Card key={issue.tag} {...issue} className={clsx(index === 1 && "lg:mt-[30px] mx-[20px]")} />)}
        </div>
      </div>
    </section>
  );
};

export default PolicyIssues
