/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ParentLogin from './pages/parent/ParentLogin';
import Dashboard from './pages/parent/Dashboard';
import ChildLogin from './pages/child/ChildLogin';
import YearSelect from './pages/child/YearSelect';
import TopicSelect from './pages/child/TopicSelect';
import Quiz from './pages/child/Quiz';
import QuizSummary from './pages/child/QuizSummary';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/parent-dashboard" element={<Dashboard />} />
        <Route path="/child-login" element={<ChildLogin />} />
        <Route path="/year-select" element={<YearSelect />} />
        <Route path="/topic-select/:year" element={<TopicSelect />} />
        <Route path="/quiz/:year/:topic" element={<Quiz />} />
        <Route path="/quiz-summary" element={<QuizSummary />} />
      </Routes>
    </Router>
  );
}
