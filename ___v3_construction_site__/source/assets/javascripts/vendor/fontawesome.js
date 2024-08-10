import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

library.add(faTwitterSquare,
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
  faChevronDown,
  faGithubSquare);

dom.watch();
