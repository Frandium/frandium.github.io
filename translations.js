const translations = {
  en: {
    metaDescription:
      "Fang Dong is a Ph.D. candidate at Fudan University working on semantic-aware MoE routing, efficient LLM inference, expert specialization, and AI infrastructure.",
    toggleLabel: "中文",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.eyebrow": "Ph.D. Candidate · Fudan University",
    "hero.name": "Fang Dong",
    "hero.subtitle": "董方",
    "hero.lead":
      "I work on Mixture-of-Experts models, semantic-aware routing, expert specialization, and memory-efficient LLM inference. I am looking for research and engineering roles on foundation model architecture, LLM training/inference systems, and efficient MoE.",
    "focus.moe": "MoE Models",
    "focus.architecture": "Foundation Model Architecture",
    "focus.trainingInference": "LLM Training & Inference",
    "focus.deployment": "Efficient Deployment",
    "button.email": "Email",
    "button.publications": "Publications",
    "button.experience": "Experience",
    "facts.educationLabel": "Education",
    "facts.education": "Ph.D. Candidate, Fudan University",
    "facts.advisorLabel": "Advisor",
    "facts.advisor": "Prof. Li Shang",
    "facts.graduationLabel": "Expected Graduation",
    "facts.graduation": "June 2027",
    "facts.emailLabel": "Email",
    "research.eyebrow": "Research",
    "research.title": "Making sparse computation semantic and deployable.",
    "research.routingTitle": "Semantic-aware MoE routing",
    "research.routingText":
      "I study why existing MoE gates are often dominated by token identity and high-frequency directions, and how routing can instead follow semantic structure in language representations.",
    "research.specializationTitle": "Expert specialization",
    "research.specializationText":
      "My work explores how experts can receive more coherent semantic updates, learn long-tail domain knowledge, and reduce redundant parameter subspaces.",
    "research.inferenceTitle": "Memory-efficient inference",
    "research.inferenceText":
      "I develop routing and prediction mechanisms that make MoE expert activation more local and predictable, reducing expert swapping and memory demand in constrained inference settings.",
    "publications.eyebrow": "Selected Publications",
    "publications.title": "Work on MoE structure, routing, and efficient training.",
    "publications.oracleVenue": "ICML 2025 · CCF-A · Co-first author",
    "publications.oracleText":
      "Uses attention-output representations for locality-preserving MoE routing, enabling a single input sequence to activate a much smaller expert set and reducing memory demand during inference.",
    "publications.onceVenue": "NeurIPS 2024 · CCF-A · First author",
    "publications.onceText":
      "Introduces cluster-guided sparse experts for learning long-tail domain knowledge during pretraining without additional domain pretraining or supervised fine-tuning.",
    "publications.sdVenue": "ICML 2026 · CCF-A · Co-first author",
    "publications.sdText":
      "Analyzes redundancy across expert parameter spaces and uses spectral decomposition to promote more effective expert specialization.",
    "publications.mhaText":
      "Studies how mixed dispatch of attention-head features affects knowledge retention, and proposes head-aware expert routing for MoE continual learning.",
    "publications.metisText":
      "Collaborative work on spectral-decomposition based low-precision training for large language models.",
    "publications.spectraText":
      "Explores optimizer design under spectral anisotropy and improves training efficiency through spectral constraints.",
    "experience.eyebrow": "Experience",
    "experience.title": "Research and engineering across models, systems, and deployment.",
    "experience.phdTitle": "Ph.D. Candidate, Fudan University",
    "experience.phdText":
      "Advised by Prof. Li Shang. Research focus: MoE models, semantic-aware routing, expert specialization, and efficient LLM inference.",
    "experience.msraTitle": "Research Intern, Microsoft Research Asia",
    "experience.msraText":
      "Implemented neural architecture search algorithms in NNI and adapted training workflows for multi-GPU PyTorch settings.",
    "experience.projectsTime": "Selected projects",
    "experience.projectsTitle": "Memory-friendly MoE inference",
    "experience.projectsText":
      "Developed and validated MoE routing and expert activation prediction methods for reducing expert swapping, inference memory demand, and deployment overhead.",
    "contact.eyebrow": "Contact",
    "contact.title": "Open to research conversations on efficient LLMs and MoE systems.",
    "footer.built": "Built with GitHub Pages"
  },
  zh: {
    metaDescription:
      "董方，复旦大学博士生，研究方向包括 MoE 模型、语义感知路由、专家专业化和高效大模型推理。",
    toggleLabel: "EN",
    "nav.research": "研究方向",
    "nav.publications": "学术成果",
    "nav.experience": "经历",
    "nav.contact": "联系",
    "hero.eyebrow": "复旦大学博士生",
    "hero.name": "董方",
    "hero.subtitle": "Fang Dong",
    "hero.lead":
      "我的研究聚焦 Mixture-of-Experts 模型、语义感知路由、专家专业化和内存友好的大模型推理。目前主要面向基座模型结构、大模型训练与推理系统、高效 MoE 等方向的研究和工程岗位。",
    "focus.moe": "MoE 模型",
    "focus.architecture": "基座模型结构",
    "focus.trainingInference": "大模型训练与推理",
    "focus.deployment": "高效部署",
    "button.email": "邮箱",
    "button.publications": "学术成果",
    "button.experience": "经历",
    "facts.educationLabel": "教育背景",
    "facts.education": "复旦大学博士生",
    "facts.advisorLabel": "导师",
    "facts.advisor": "尚笠教授",
    "facts.graduationLabel": "预计毕业",
    "facts.graduation": "2027 年 6 月",
    "facts.emailLabel": "邮箱",
    "research.eyebrow": "研究方向",
    "research.title": "让稀疏计算具备语义结构，并且更容易部署。",
    "research.routingTitle": "语义感知 MoE 路由",
    "research.routingText":
      "我研究为什么现有 MoE 路由容易被 token identity 和高频方向主导，并探索如何让路由更多地跟随语言表征中的语义结构。",
    "research.specializationTitle": "专家专业化",
    "research.specializationText":
      "我的工作关注如何让 expert 接收更一致的语义更新、学习长尾领域知识，并减少 expert 参数空间中的冗余。",
    "research.inferenceTitle": "内存友好的推理",
    "research.inferenceText":
      "我设计 MoE 路由和 expert 激活预测方法，使 expert 激活更局部、更可预测，从而降低受限推理场景下的 expert swapping 和显存需求。",
    "publications.eyebrow": "学术成果",
    "publications.title": "围绕 MoE 结构、路由和高效训练的研究工作。",
    "publications.oracleVenue": "ICML 2025 · CCF-A · 共同一作",
    "publications.oracleText":
      "使用 attention 输出表征进行保持局部性的 MoE 路由，使单条输入序列只激活更少的 expert，从而降低推理阶段的内存需求。",
    "publications.onceVenue": "NeurIPS 2024 · CCF-A · 一作",
    "publications.onceText":
      "提出基于聚类的稀疏 expert 方法，在预训练阶段学习长尾领域知识，无需额外领域预训练或监督微调。",
    "publications.sdVenue": "ICML 2026 · CCF-A · 共同一作",
    "publications.sdText":
      "分析 expert 参数空间中的冗余，并通过谱分解促进更有效的 expert 专业化。",
    "publications.mhaText":
      "研究 attention-head 特征混合分发如何影响知识保持，并提出 head-aware expert routing 缓解 MoE continual learning 中的遗忘问题。",
    "publications.metisText":
      "参与基于谱分解的低精度大模型训练研究，实现更稳健的 FP4 训练。",
    "publications.spectraText":
      "从谱各向异性的角度重新思考优化器设计，并通过谱约束提升训练效率。",
    "experience.eyebrow": "经历",
    "experience.title": "横跨模型、系统和部署的研究与工程经历。",
    "experience.phdTitle": "复旦大学博士生",
    "experience.phdText":
      "导师为尚笠教授。研究方向包括 MoE 模型、语义感知路由、专家专业化和高效大模型推理。",
    "experience.msraTitle": "微软亚洲研究院研究实习生",
    "experience.msraText":
      "实现 NNI 开源框架中的多类神经网络结构搜索算法，并基于 PyTorch 适配多卡训练流程。",
    "experience.projectsTime": "代表项目",
    "experience.projectsTitle": "内存友好的 MoE 推理",
    "experience.projectsText":
      "设计并验证 MoE 路由和 expert 激活预测方法，用于降低 expert swapping、推理显存需求和部署开销。",
    "contact.eyebrow": "联系",
    "contact.title": "欢迎围绕高效大模型和 MoE 系统展开研究交流。",
    "footer.built": "基于 GitHub Pages 构建"
  }
};

const languageToggle = document.querySelector("#languageToggle");
const descriptionMeta = document.querySelector('meta[name="description"]');
const supportedLanguages = ["en", "zh"];

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem("language");
  if (supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }
  return document.documentElement.lang === "zh" ? "zh" : "en";
}

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", dictionary.metaDescription);
  }
  languageToggle.textContent = dictionary.toggleLabel;
  languageToggle.setAttribute(
    "aria-label",
    language === "zh" ? "Switch to English" : "切换到中文"
  );
  window.localStorage.setItem("language", language);
}

languageToggle.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  setLanguage(nextLanguage);
});

setLanguage(getInitialLanguage());
